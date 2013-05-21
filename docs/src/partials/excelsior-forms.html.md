#Forms
<form>
    <fieldset>
        <legend>Contact Us</legend>
        <div class="row">
            <div class="large-3 small-12 columns">
                <label for="name" class="required">Name<span class="hide"> Required field.</span></label>
            </div>
            <div class="large-9 small-12 columns">
                <input type="text" name="name" id="name" tabindex="1" value="" required>
            </div>
        </div>

        <div class="row">
            <div class="large-3 small-12 columns">
                <label for="email">Email</label>
            </div>
            <div class="large-9 small-12 columns">
                <input type="email" name="email" id="email" tabindex="1" value="">
            </div>
        </div>

        <div class="row">
            <div class="large-3 small-12 columns">
                <label for="addr1" class="required"><span data-tooltip class="has-tip tip-right" title="Separate multiple address lines (i.e., apartment number) with a comma">Street address</span><span class="hide"> Required field.</span></label>
            </div>
            <div class="large-9 small-12 columns">
                <input type="text" name="addr1" id="addr1" value="" tabindex="1" required>
            </div>
        </div>

        <div class="row">
            <div class="large-3 small-12 columns">
                <label for="zip" class="required"><span data-tooltip class="has-tip tip-right" title="US: 55555 or 55555-4444<br>Canada: A1A 1A1 (space is optional)">ZIP</span><span class="hide"> Required field.</span></label>
            </div>
            <div class="large-9 small-12 columns">
                <input type="text" pattern="(^\d{5}(-\d{4})?$)|(^[A-Za-z]{1}\d{1}[A-Za-z]{1}\s*\d{1}[A-Za-z]{1}\d{1}$)" name="zip" id="zip" value="" tabindex="1" required>
                <div class="form-field-info">
                    <p>US: 55555 or 55555-4444<br>Canada: A1A 1A1 (space is optional)</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="large-3 small-12 columns">
                <label for="phone">Phone</label>
            </div>
            <div class="large-9 small-12 columns">
                <div class="row">
                    <div class="large-12 small-12 columns">
                        <input type="tel" name="phone" id="phone" tabindex="1" value="">
                    </div>
                    <div class="large-12 small-12 columns">
                        <div class="large-4 small-4 columns">
                            <label for="phone1" class="inline">Mobile <input name="phoneType" type="radio" tabindex="1" id="phone1" checked></label>
                        </div>
                        <div class="large-4 small-4 columns">
                            <label for="phone2" class="inline">Work <input name="phoneType" type="radio" tabindex="1" id="phone2" checked></label>
                        </div>
                        <div class="large-4 small-4 columns">
                            <label for="phone3" class="inline">Home <input name="phoneType" type="radio" tabindex="1" id="phone3" checked></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="large-3 small-12 columns">
                <label class="required" for="comments">Comments<span class="hide"> Required field.</span></label>
            </div>
            <div class="large-9 small-12 columns">
                <textarea id="comments" required tabindex="1"></textarea>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns center">
                <input type="submit" class="button success" tabindex="1" value="Submit">
            </div>
        </div>

    </fieldset>
</form>