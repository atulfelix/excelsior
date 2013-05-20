#Forms

<form>
    <fieldset>
        <legend>Form Legend</legend>

        <div class="row">
            <div class="large-12 columns">
                <label>Input Label</label>
                <input type="text" placeholder="large-12.columns">
            </div>
        </div>

        <div class="row">
            <div class="large-4 columns">
                <label>Input Label</label>
                <input type="text" placeholder="large-4.columns">
            </div>
            <div class="large-4 columns">
                <label>Input Label</label>
                <input type="text" placeholder="large-4.columns">
            </div>
            <div class="large-4 columns">
                <div class="row collapse">
                    <label>Input Label</label>
                    <div class="small-9 columns">
                        <input type="text" placeholder="small-9.columns">
                    </div>
                    <div class="small-3 columns">
                        <span class="postfix">.com</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="large-12 columns">
                <label>Textarea Label</label>
                <textarea placeholder="small-12.columns"></textarea>
            </div>
        </div>

    </fieldset>
</form>

<form class="custom">
    <div class="row">
        <div class="large-4 columns">
            <label for="radio1"><input name="radio1" type="radio" id="radio1" style="display:none;" CHECKED><span class="custom radio checked"></span> Radio Button 1</label>
            <label for="radio1"><input name="radio1" type="radio" id="radio1" style="display:none;"><span class="custom radio"></span> Radio Button 2</label>
            <label for="radio1"><input name="radio1" type="radio" id="radio1" disabled style="display:none;"><span class="custom radio"></span> Radio Button 3</label>
        </div>
        <div class="large-4 columns">
            <label for="checkbox1"><input type="checkbox" id="checkbox1" style="display: none;"><span class="custom checkbox"></span> Label for Checkbox</label>
            <label for="checkbox2"><input type="checkbox" id="checkbox2" CHECKED style="display: none;"><span class="custom checkbox checked"></span> Label for Checkbox</label>
            <label for="checkbox3"><input type="checkbox" CHECKED id="checkbox3" style="display: none;"><span class="custom checkbox checked"></span> Label for Checkbox</label>
        </div>
        <div class="large-4 columns">
            <label for="customDropdown1">Medium Example</label>
            <select id="customDropdown1" class="medium">
                <option DISABLED>This is a dropdown</option>
                <option>This is another option</option>
                <option>This is another option too</option>
                <option>Look, a third option</option>
            </select>
        </div>
    </div>
</form>