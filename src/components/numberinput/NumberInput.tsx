import React, { useState } from "react";
import "./NumberInputStyles.scss"

type NumberInputPropsTypes = {
    fieldName: string
    value: number
    equal: boolean
    callback: (num: number) => void
}

export const NumberInput: React.FC<NumberInputPropsTypes> = (props) => {
    const {fieldName, value, equal, callback} = props
    const inputClassName = ((value >= 0) && !equal) ? "field" : "field error"

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }

    return (
        <label className="field_label">
            {fieldName + ':'}

            <input 
                className={inputClassName}
                type="number" 
                value={value} 
                onChange={onChangeHandler}/>
        </label>
    )
}