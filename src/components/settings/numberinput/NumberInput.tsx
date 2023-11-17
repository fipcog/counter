import React, { useState } from "react";
import "./NumberInputStyles.scss"

type NumberInputPropsTypes = {
    fieldName: string
    value: number
    className: string
    callback: (num: number) => void
}

export const NumberInput: React.FC<NumberInputPropsTypes> = (props) => {
    const {fieldName, value, className, callback} = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }

    return (
        <label className="field_label">
            {fieldName + ':'}

            <input 
                className={className}
                type="number" 
                value={value} 
                onChange={onChangeHandler}/>
        </label>
    )
}