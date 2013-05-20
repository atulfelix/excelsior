#Typography

<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header. h1.</h5>
<h6>h6. This is a tiny header. h1.</h6>

<br>

<h1 class="subheader">h1.subheader</h1>
<h2 class="subheader">h2.subheader</h2>
<h3 class="subheader">h3.subheader</h3>
<h4 class="subheader">h4.subheader</h4>
<h5 class="subheader">h5.subheader</h5>
<h6 class="subheader">h6.subheader</h6>

<br>

<ul class="disc">
    <li>List item with a much longer description or more content.</li>
    <li>List item</li>
    <li>List item
        <ul>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
        </ul>
    </li>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
</ul>

<!-- Ordered lists are great for lists that need order, duh -->
<ol>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ol>

<!-- Definition lists are great for small block of copy that describe the header -->
<dl>
    <dt>Definition List</dt>
    <dd>Definition Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.</dd>
</dl>

<br>

<blockquote>I do not fear computers. I fear the lack of them. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.<cite>Isaac Asimov</cite></blockquote>

<br>

<ul class="vcard">
    <li class="fn">Gaius Baltar</li>
    <li class="street-address">123 Colonial Ave.</li>
    <li class="locality">Caprica City</li>
    <li><span class="state">Caprica</span>, <span class="zip">12345</span></li>
    <li class="email"><a href="#">g.baltar@cmail.com</a></li>
</ul>

<hr>

<h4>Visibility Classes</h4>

<h5>Screen Size Visibility Control (Show)</h5>
<p>The following text should describe the screen size you're using:</p>
<p class="panel">
    <strong class="show-for-small">You are on a small screen.</strong>
    <strong class="show-for-medium">You are on a medium screen.</strong>
    <strong class="show-for-medium-up">You are on a medium, large or xlarge screen.</strong>
    <strong class="show-for-medium-down">You are on a medium or small screen.</strong>
    <strong class="show-for-large">You are on a large screen.</strong>
    <strong class="show-for-large-up">You are on a large or xlarge screen.</strong>
    <strong class="show-for-large-down">You are on a large, medium or small screen.</strong>
    <strong class="show-for-xlarge">You are on a xlarge screen.</strong>
</p>

<h5>Screen Size Visibility Control (Hide)</h5>
<p>The following text should describe the screen size you aren't using:</p>
<p class="panel">
    <strong class="hide-for-small">You are <em>not</em> on a small screen.</strong>
    <strong class="hide-for-medium">You are <em>not</em> on a medium screen.</strong>
    <strong class="hide-for-medium-up">You are <em>not</em> on a medium, large or xlarge screen.</strong>
    <strong class="hide-for-medium-down">You are <em>not</em> on a medium or small screen.</strong>
    <strong class="hide-for-large">You are <em>not</em> on a large screen.</strong>
    <strong class="hide-for-large-up">You are <em>not</em> on a large or xlarge screen.</strong>
    <strong class="hide-for-large-down">You are <em>not</em> on a large, medium or small screen.</strong>
    <strong class="hide-for-xlarge">You are <em>not</em> on a xlarge screen.</strong>
</p>

<h5>Orientation Detection</h5>
<p>The following text should describe the device orientation you're using:</p>
<p class="panel">
    <strong class="show-for-landscape">You are in landscape orientation.</strong>
    <strong class="show-for-portrait">You are in portrait orientation.</strong>
</p>

<h5>Touch Detection</h5>
<p>The following text should describe if you're using a touch device:</p>
<p class="panel">
    <strong class="show-for-touch">You are on a touch-enabled device.</strong>
    <strong class="hide-for-touch">You are not on a touch-enabled device.</strong>
</p>