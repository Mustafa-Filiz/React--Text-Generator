import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchDataAsync,
    formatSelector,
    parasSelector,
    setFormat,
    setParas,
} from '../redux/textSlice';

function Form() {
    const paras = useSelector(parasSelector);
    const format = useSelector(formatSelector);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchDataAsync(paras, format));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input">
                <label htmlFor="paragraph">Paragraphs</label>
                <input
                    type="number"
                    name="paragraph"
                    id="paragraph"
                    value={paras}
                    onChange={(e) => dispatch(setParas(e.target.value))}
                />
            </div>
            <div className="input">
                <label htmlFor="html">Format</label>
                <select
                    name="html"
                    id="html"
                    value={format}
                    onChange={(e) => dispatch(setFormat(e.target.value))}
                >
                    <option value="text">Text</option>
                    <option value="html">HTML</option>
                </select>
            </div>
            <button type="submit">Generate</button>
        </form>
    );
}

export default Form;
