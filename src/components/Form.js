import React from 'react';

function Form() {
    return (
        <form className="form">
            <div className="input">
                <label htmlFor="paragraph">Paragraphs</label>
                <input type="number" name="paragraph" id="paragraph" />
            </div>
            <div className="input">
                <label htmlFor="html">Include HTML</label>
                <select name="html" id="html">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
