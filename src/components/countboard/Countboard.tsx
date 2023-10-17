import React from "react";
import "./CountboardStyles.scss"

type CountboardPropTypes = {
    children: number
    limitCount: number
    error: string
}

export const Countboard: React.FC<CountboardPropTypes> = ({children, limitCount, error}) => {
    switch (error) {
        case `incorrect`:
            return <div className="countboard error_massage">Incorrect value!</div>

        case 'unsetted':
            return <div className="countboard warning_message">Enter values and press "set"</div>

        default:
            return <div className={children >= limitCount ? "countboard limit" : "countboard"}>{children}</div>
    }
}