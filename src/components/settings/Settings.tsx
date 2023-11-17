import React, { useEffect, useState } from "react";
import "./SettingsStyles.scss";
import { NumberInput } from "./numberinput/NumberInput";
import { Button } from "../btn/Btn";
import { useSelector } from "react-redux";
import { RootAppStoreType } from "../../store/store";
import { resetCounterAC, setErrorAC, setInitialCountAC, setLimitCountAC } from "../../reducers/counterReducer";
import { useDispatch } from "react-redux";


export const Settings: React.FC = (props) => {  

    const dispatch = useDispatch()

    const initialCount = useSelector<RootAppStoreType, number>((state)=> state.counter.initialCount)
    const limitCount = useSelector<RootAppStoreType, number>((state)=> state.counter.limitCount)

    const [initNum, setInitNum] = useState<number>(initialCount)
    const [limitNum, setLimitNum] = useState<number>(limitCount)

    const isValueSetted = (initialCount === initNum) && (limitCount === limitNum)
    const isValuesEqual = initNum === limitNum
    const isValuesCorrect = (initNum >= 0) && (limitNum >= 0) && !isValuesEqual && initNum < limitNum
    const shouldBtnDisable = isValueSetted || !isValuesCorrect ? true : false
    useEffect(() => {
        if(isValuesCorrect) dispatch(setErrorAC(''))
        if(!isValueSetted) dispatch(setErrorAC('unsetted'))
        if(!isValuesCorrect) dispatch(setErrorAC('incorrect'))
    }, [isValuesCorrect, isValueSetted])

    const setCountsHandler =  ():void => {
        if(!isValueSetted && isValuesCorrect) {
            dispatch(setInitialCountAC(initNum))
            dispatch(resetCounterAC())
            dispatch(setLimitCountAC(limitNum))
            dispatch(setErrorAC(''))
        }
    }

    
    return (
        <div className="settings">
            <NumberInput 
                        fieldName="Limit value" 
                        callback={setLimitNum} 
                        value={limitNum} 
                        className={((limitNum >= 0) && !isValuesEqual) ? "field" : "field error"}
                        />
            <NumberInput 
                        fieldName="Start value" 
                        callback={setInitNum} 
                        value={initNum} 
                        className={((initNum >= 0) && initNum < limitNum && !isValuesEqual) ? "field" : "field error"}
                        />
            <Button 
                    className="btn btn_settings" 
                    callback={setCountsHandler} 
                    disabled={shouldBtnDisable}
                    >Set</Button>
        </div>
    )
}