import React from "react";
import './Btn.scss'

type ButtonPropTypes = {
    children: string
    disabled?: boolean
    className?: string
    callback: () => void
}

export const Button: React.FC<ButtonPropTypes> = (props) => {
    const {children, disabled, className, callback} = props

    return (
        <button className={className ? className : 'btn'} 
                onClick={callback} 
                disabled={disabled}
        >{children}</button>
    )
}