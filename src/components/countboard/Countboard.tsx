import React from "react";
import "./CountboardStyles.scss"

type CountboardPropTypes = {
    children: number
    limitCount: number
}

export const Countboard: React.FC<CountboardPropTypes> = ({children, limitCount}) => {
    return (
        <div className={children >= limitCount ? "countboard limit" : "countboard"}>{children}</div>
    )
}