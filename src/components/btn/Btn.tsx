import React from "react";
import './Btn.scss'

type ButtonPropTypes = {
    children: string
    disabled?: boolean
    callback: () => void
}

export const Button: React.FC<ButtonPropTypes> = ({children, disabled, callback}) => {
    return (
        <button className="btn" onClick={callback} disabled={disabled}>{children}</button>
    )
}