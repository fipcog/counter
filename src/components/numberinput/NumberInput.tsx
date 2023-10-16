import React, { useState } from "react";

type NumberInputPropsTypes = {
    fieldName: string
    callback: (num: number) => void
    default: number
}

export const NumberInput: React.FC<NumberInputPropsTypes> = (props) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.callback(Number(e.currentTarget.value))
    }

    return (
        <label>{props.fieldName + ':'}<input type="number" value={props.default} onChange={onChangeHandler}/></label>
    )
}