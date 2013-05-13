/**
 * Excelsior Web Framework v0.1.2
 * (c) 2013 NYS ITS
 * https://github.com/nys-its/excelsior.git
 * License (MIT): https://github.com/nys-its/excelsior/blob/master/license.md
 */

/**
 * @fileOverview Excelsior Framework common functions
 * @author <a href="https://github.com/nys-its/excelsior">NYS-ITS</a>
 * @version 0.1.2
 */

/**
 * @namespace
 */
var EWF = {
    ua: navigator.userAgent,
    iOS: false,
    $body: null,
    $html: null,
    $window: null,
    projectRoot: 'excelsior/',
    imagePath: 'excelsior/images/'
};

/**
 * Main initialization method
 */
EWF.init = function _init () {
    var screenMax;

    // Cache often-used queries
    EWF.$body = $('body');
    EWF.$html = $('html');
    EWF.$window = $(window);

    // Monitor-size classes
    screenMax = Math.max(screen.width, screen.height);
    if (screenMax <= 480) {
        EWF.$html.addClass('screen-max-mini');
    }
    else if (screenMax > 480 && screenMax < 768) {
        // Only Foundation's `small-` classes will ever take effect
        EWF.$html.addClass('screen-max-medium');
    }
    else if (screenMax >= 768) {
        // Foundation's `large-` classes may take effect
        EWF.$html.addClass('screen-max-large');
    }

    // Preload assets
    EWF.fixImagePath();

    // Images referenced by CSS that aren't visible at page load but will likely appear in normal usage
    EWF.preloader.add('<img src="' + EWF.imagePath + 'close.svg" alt="">');
    EWF.preloader.add('<img src="' + EWF.imagePath + 'close-x-gray.svg" alt="">');
    EWF.preloader.add('<img src="' + EWF.imagePath + 'hamburger-no-dots.svg" alt="">');
    EWF.preloader.add('<img src="' + EWF.imagePath + 'nys-small.png" alt="">');
    EWF.preloader.add('<img src="' + EWF.imagePath + 'nys-banner-img.png" alt="">');

    EWF.preloader.init();
};

$(document).ready(function(){EWF.init();});

/**
 * Client- and environment-related properties
 */

/**
 * Relative image path
 */
EWF.fixImagePath = function _fixImagePath() {
    var currentUrl = document.location.pathname,
        slashRegex, index, numSubDirectories, i;

    if (currentUrl < 0) { // Cannot determine relative path
        return false;
    }

    // Trim path down to just the Excelsior
    index = currentUrl.indexOf(EWF.projectRoot);
    currentUrl = currentUrl.substr(index);

    slashRegex = /\//g;

    if (slashRegex.test(currentUrl)) {
        // Add a dot-dot-slash for each sub directory we're in
        numSubDirectories = currentUrl.match(slashRegex).length - 1;
        for (i = 0; i < numSubDirectories; i++) {
            EWF.imagePath = '../' + EWF.imagePath;
        }
    }
};

(function () {
  // Determine click type
  if (Modernizr.touch) {

    // Setup fastclick
    (function() {
        FastClick.attach(document.body);
    })();

  } // end if(Modernizr.touch)

  // Detect iOS
  if ( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(EWF.ua) && EWF.ua.indexOf( "AppleWebKit" ) > -1 ){
    EWF.iOS = true;

    /*! A fix for the iOS orientationchange zoom bug.
     Script by @scottjehl, rebound by @wilto.
     MIT / GPLv2 License.
     https://github.com/scottjehl/iOS-Orientationchange-Fix
    */
    (function(w){
      var doc = w.document;
      if( !doc.querySelector ){ return; }
      var meta = doc.querySelector( "meta[name=viewport]" ),
          initialContent = meta && meta.getAttribute( "content" ),
          disabledZoom = initialContent + ",maximum-scale=1",
          enabledZoom = initialContent + ",maximum-scale=10",
          enabled = true,
          x, y, z, aig;
      if( !meta ){ return; }
      function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
      }
      function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
      }
      function checkTilt( e ){
        aig = e.accelerationIncludingGravity;
        x = Math.abs( aig.x );
        y = Math.abs( aig.y );
        z = Math.abs( aig.z );
        // If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ) {
          if( enabled ) {
            disableZoom();
          }
        }
        else if( !enabled ){
          restoreZoom();
        }
      }

      w.addEventListener( "orientation change", restoreZoom, false );
      w.addEventListener( "devicemotion", checkTilt, false );
    })( window );

  } // end if(iOS)

}());

/**
 * Navigation Menu Setup
 */
$(document).ready(function(){

    if (!EWF.$body) {
        EWF.$body = $('body');
    }

    // Standard Gov Banner display code
    $('#gov-link-3').on('click', function(e) {
        e.preventDefault();
        EWF.$body.addClass('active-gov-bar-search');
    });

    // Active Elements
    $('[data-active]').on('click', function(e) {

        console.log('clicked');

        // Prevent Defaults
        e.preventDefault();

        // Stop the click from moving up.
        e.stopPropagation();

        // Active attribute class
        var $clickedElm = $(this),
            activeClass = $clickedElm.attr('data-active'),
            $activeElm = $('.active'),
            selectedClass = 'active';

        /**
        * Closes pre-existing active items
        * @param {object} active The active element
        */
        function removeOtherActive(active) {

            // Get the old active class to remove from the body tag
            var activeClass = active.attr('data-active');

            // Remove the old active class
            EWF.$body.removeClass(activeClass);

            // Remove the active class from the old active item
            active.removeClass('active');

        }

        /**
        * Special functionality determined by the data-active value
        * @param {object} activeElm The active element
        */
        function specialEvents(activeElm) {

            if (activeElm === 'active-site-search') {
                $('#site-search-box').focus();
            }

            if (activeElm === 'active-site-menu') {

                // Check to see if off canvas is being used
                if (EWF.$body.hasClass('off-canvas') && EWF.$body.hasClass('active-site-menu')) {
                    // Get the screen size and set it has a min-height
                    //document.getElementsByTagName("body").style.minHeight = screen.height + "px";
                    EWF.$body.css('min-height',screen.height+'px');
                } else {
                    // Remove min height
                    EWF.$body.css('min-height','');
                }
            }
        }

        // Check to see if there is already and active item
        if ($activeElm.length > 0) {

            // Check to make sure its not the same as the currently clicked item
            if ($activeElm.attr('data-active') !== $clickedElm.attr('data-active')) {
                removeOtherActive($activeElm);
            }

        }

        // Check to see if the item is active
        if (EWF.$body.hasClass(activeClass)) {

            // Remove active state class from header
            EWF.$body.removeClass(activeClass);

            // Remove active state class from the clicked element
            $clickedElm.removeClass(selectedClass);

            // Remove any stray body click event
            EWF.$body.off('click');

        } else {
            // Add active state class from header
            EWF.$body.addClass(activeClass);

            // Add active state class from clicked element
            $clickedElm.addClass(selectedClass);

            // Setup the on click function to close open drop down if the user clicks outside the active element.
            EWF.$body.on('click', function(e) {
                var activeElm = $('.active'),
                clicked = $(this);

                // Check for active elements
                if (activeElm.length > 0 && e.target.tagName !== "INPUT") {

                    // Since we have an active element get the body class we need
                    var activeClass = activeElm.attr('data-active');

                    // Remove the active element class
                    EWF.$body.removeClass(activeClass);

                    // Remove active from the active element
                    activeElm.removeClass('active');

                    // Remove this click event
                    EWF.$body.off('click');

                }

            });

            // Check to see if anything special has to happen based on data-active value
            specialEvents(activeClass);

        }

    });

});

/**
 * @namespace Asset Preloader
 */
EWF.preloader = {
    container: null, // The container <div>
    assets: []       // Assets to be preloaded (HTML strings); this can be prepopulated
};

/**
 * Creates an off-screen container for preloaded assets and adds any assets present in the queue.
 * Should be called at document.ready
 */
EWF.preloader.init = function _EWF_preloader_init () {
    // Create container
    EWF.preloader.container = document.createElement('div');
    EWF.preloader.container.className = 'hide-off-screen';
    document.body.appendChild(EWF.preloader.container);

    // Load anything that's already in the queue
    $.each(EWF.preloader.assets, function(i, asset) {
        EWF.preloader.add(asset);
    });

    // Empty the queue
    EWF.preloader.assets = [];
};

/**
 * Adds an asset to the preload container
 * May be called before or after preload.setup() has run
 * @param {string} html HTML string to be added to the page
 */
EWF.preloader.add = function _EWF_preloader_add (html) {
    if (!html || typeof html !== 'string') { return false; }

    // If the container has already been set up, add this asset immediately
    if (EWF.preloader.container) {
        EWF.preloader.container.innerHTML += html;
    }
    // Otherwise, queue it to load when setup() is run
    else {
        EWF.preloader.assets.push(html);
    }
};

/**
 * Plugins
 */

try {
    /**
     * Simple array-reversal plugin
     */
    $.fn.reverse = [].reverse;
} catch (e) { }