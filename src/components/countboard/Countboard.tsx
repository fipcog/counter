import React from "react";
import "./CountboardStyles.scss"

type CountboardPropTypes = {
    children: number
}

export const Countboard: React.FC<CountboardPropTypes> = ({children}) => {
    return (
        <div className={children >= 5 ? "countboard limit" : "countboard"}>{children}</div>
    )
}