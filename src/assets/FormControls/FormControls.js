import React from 'react'
import { Field } from 'redux-form'
import s from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={ hasError ? `${s.formControl} ${s.error}` : s.formControl}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={ hasError ? `${s.formControl} ${s.error}` : s.formControl}>
            <div>
                <input {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props={}, text="") => {
    <div>
        <Field placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
                /> {text}
    </div>
}