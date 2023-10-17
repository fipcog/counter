import React, { useEffect, useState } from "react";
import "./SettingsStyles.scss";
import { NumberInput } from "../numberinput/NumberInput";
import { Button } from "../btn/Btn";
import { ErrorType } from "../../App";

type SettingsPropsTypes = {
    setError: (error: ErrorType) => void
    setInitCount: (initNum: number) => void
    setLimitCount: (limitNum: number) => void
    defaultInitCount: number
    defaultLimitCount: number
    initialCount: number
    limitCount: number
}

export const Settings: React.FC<SettingsPropsTypes> = (props) => {
    const {setInitCount, 
            setLimitCount,
            setError, 
            defaultInitCount, 
            defaultLimitCount,
            initialCount,
            limitCount
        } = props       

    const [initNum, setInitNum] = useState<number>(defaultInitCount)
    const [limitNum, setLimitNum] = useState<number>(defaultLimitCount)

    const isValueSetted = (initialCount === initNum) && (limitCount === limitNum)
    const isValuesEqual = initNum === limitNum
    const isValuesCorrect = (initNum >= 0) && (limitNum >= 0) && !isValuesEqual
    const shouldBtnDisable = isValueSetted || !isValuesCorrect ? true : false
    useEffect(() => {
        if(isValuesCorrect) setError('')
        if(!isValueSetted) setError('unsetted')
        if(!isValuesCorrect) setError('incorrect')
    })

    const setCountsHandler =  ():void => {
        if(!isValueSetted && isValuesCorrect) {
            setInitCount(initNum)
            setLimitCount(limitNum)
            setError('')
        }
    }

    
    return (
        <div className="settings">
            <NumberInput fieldName="Limit value" callback={setLimitNum} value={limitNum} equal={isValuesEqual}/>
            <NumberInput fieldName="Start value" callback={setInitNum} value={initNum} equal={isValuesEqual}/>
            <Button className="btn btn_settings" callback={setCountsHandler} disabled={shouldBtnDisable}>Set</Button>
        </div>
    )
}