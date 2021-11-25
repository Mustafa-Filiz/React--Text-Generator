import React from 'react';
import { useSelector } from 'react-redux';
import { formatSelector, textSelector } from '../redux/textSlice';

function Display() {
    const text = useSelector(textSelector);
    const format = useSelector(formatSelector);

    return (
        <div>
            {text && text.map((p) =>
                format === 'html' ? <p>{`<p>${p}</p>`}</p> : <p>{p}</p>
            )}
        </div>
    );
}

export default Display;
