import React, { useState } from "react";
import { NumberInput } from "../numberinput/NumberInput";
import { Button } from "../btn/Btn";

type SettingsPropsTypes = {
    setInitCount: (initNum: number) => void
    setLimitCount: (limitNum: number) => void
    defaultInitCount: number
    defaultLimitCount: number
}

export const Settings: React.FC<SettingsPropsTypes> = (props) => {
    const {setInitCount, setLimitCount, defaultInitCount, defaultLimitCount} = props
    const [initNum, setInitNum] = useState<number>(defaultInitCount)
    const [limitNum, setLimitNum] = useState<number>(defaultLimitCount)

    const setCountsHandler =  ():void => {
        setInitCount(initNum)
        setLimitCount(limitNum)
    }

    
    return (
        <div>
            <NumberInput fieldName="Limit value" callback={setLimitNum} default={limitNum}/>
            <NumberInput fieldName="Start value" callback={setInitNum} default={initNum}/>
            <Button callback={setCountsHandler}>Set</Button>
        </div>
    )
}