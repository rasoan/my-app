import React from "react";
import style from "./FormControls.module.scss";

export const TextareaDefault = ({input, meta, ...props}) => {
    const CORRECT_INPUT = meta.touched && !meta.error;
    const INCORRECT_INPUT = meta.error && meta.touched;
    const NOT_TOUCHED = !meta.touched;
    return (
        <div>
            <div>
              <textarea {...input} {...props} className={CORRECT_INPUT ? style.correct : 
                                                         INCORRECT_INPUT ? style.inCorrect : 
                                                         NOT_TOUCHED ? style.default: style.default} />
            </div>
            {INCORRECT_INPUT && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}

export const InputDefault = ({input, meta, ...props}) => {
    const CORRECT_INPUT = meta.touched && !meta.error;
    const INCORRECT_INPUT = meta.error && meta.touched;
    const NOT_TOUCHED = !meta.touched;
    return (
        <div>
            <div>
              <input {...input} {...props} className={CORRECT_INPUT ? style.correct : 
                                                      INCORRECT_INPUT ? style.inCorrect : 
                                                      NOT_TOUCHED ? style.default: style.default} />
            </div>
            {INCORRECT_INPUT && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}

export const Login = ({input, meta, ...props}) => {
    const CORRECT_INPUT = meta.touched && !meta.error;
    const INCORRECT_INPUT = meta.error && meta.touched;
    const NOT_TOUCHED = !meta.touched;
    return (
        <div>
            <div>
              <input {...input} {...props} className={CORRECT_INPUT ? style.correct : 
                                                      INCORRECT_INPUT ? style.inCorrect : 
                                                      NOT_TOUCHED ? style.default: style.default} />
            </div>
            {INCORRECT_INPUT && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}

export const Pass = ({input, meta, ...props}) => {
    const CORRECT_INPUT = meta.touched && !meta.error;
    const INCORRECT_INPUT = meta.error && meta.touched;
    const NOT_TOUCHED = !meta.touched;
    return (
        <div>
            <div>
              <input {...input} {...props} className={CORRECT_INPUT ? style.correct : 
                                                      INCORRECT_INPUT ? style.inCorrect : 
                                                      NOT_TOUCHED ? style.default: style.default} />
            </div>
            {INCORRECT_INPUT && <span className={style.promptText}>{meta.error}</span>}
        </div>
    );
}

export const TextareaStatus = () => {
    return (
        <div>
            hello
        </div>
    )
}