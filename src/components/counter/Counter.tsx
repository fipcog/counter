import React, { useEffect, useState } from "react";
import { Countboard } from "./countboard/Countboard";
import { Button } from "../btn/Btn";
import "./CounterStyles.scss";
import { ErrorType } from "../../App";
import { useSelector } from "react-redux";
import { RootAppStoreType } from "../../store/store";
import { useDispatch } from "react-redux";
import { incrementCountAC, resetCounterAC } from "../../reducers/counterReducer";


export const Counter: React.FC = () => {
    const dispatch = useDispatch()

    const count = useSelector<RootAppStoreType, number>(state => state.counter.currentCount)
    const initialCount = useSelector<RootAppStoreType, number>(state => state.counter.initialCount)
    const limitCount = useSelector<RootAppStoreType, number>(state => state.counter.limitCount)
    const error = useSelector<RootAppStoreType, ErrorType>(state => state.counter.error)

    const shouldBtnIncrDisable = (count >= limitCount) || error ? true : false
    const shouldBtnResetDisable = (count - initialCount === 0) || error ? true : false

    const incrCount = (): void => {
        dispatch(incrementCountAC())
    }

    const resetCount = (): void => {
        dispatch(resetCounterAC())
        
    }

    return (
        <div className="counter">
            <Countboard limitCount={limitCount} error={error}>{count}</Countboard>
            <Button callback={incrCount} disabled={shouldBtnIncrDisable}>INCREMENT</Button>
            <Button callback={resetCount} disabled={shouldBtnResetDisable}>RESET</Button>
        </div>
    )
}