import React from "react";
import style from "./FormControls.module.scss";

export const Textarea = ({input, meta, ...props}) => {
    const CLASS_ELEMENT = meta.touched && meta.error ? style.notCorrect: !meta.touched ? style.default: style.correct;
    return (
        <div>
            <div>
              <textarea {...input} {...props} className={CLASS_ELEMENT} />
            </div>
            {meta.touched && meta.error && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}

export const Input = ({input, meta, ...props}) => {
    const CLASS_ELEMENT = meta.touched && meta.error ? style.notCorrect: !meta.touched ? style.default: style.correct;
    return (
        <div>
            <div>
              <input {...input} {...props} className={CLASS_ELEMENT} />
            </div>
            {meta.touched && meta.error && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}