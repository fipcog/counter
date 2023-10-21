import React, { useEffect, useState } from "react";
import { Countboard } from "./countboard/Countboard";
import { Button } from "../btn/Btn";
import "./CounterStyles.scss";
import { ErrorType } from "../../App";

type CounterPropsTypes = {
    initialCount: number
    limitCount: number
    error: ErrorType
}

export const Counter: React.FC<CounterPropsTypes> = ({initialCount, limitCount, error}) => {
    const [count, setCount] = useState<number>(initialCount)

    useEffect(() => {
        setCount(initialCount)
    }, [initialCount])

    useEffect(() => {
        if(count !== initialCount) {
            localStorage.setItem('countValue', JSON.stringify(count))
        }
    }, [count])

    useEffect(() => {
        const localStorCount = localStorage.getItem('countValue')
        if(localStorCount) {
            setCount(JSON.parse(localStorCount))
            console.log(JSON.parse(localStorCount))
        }
    }, [])

    const shouldBtnIncrDisable = (count >= limitCount) || error ? true : false
    const shouldBtnResetDisable = (count - initialCount === 0) || error ? true : false

    const incrCount = (): void => {
        if (count < limitCount) {
            setCount(count + 1)
        }
    }

    const resetCount = (): void => {
        setCount(initialCount)
        localStorage.setItem('countValue', JSON.stringify(initialCount))
    }

    return (
        <div className="counter">
            <Countboard limitCount={limitCount} error={error}>{count}</Countboard>
            <Button callback={incrCount} disabled={shouldBtnIncrDisable}>INCREMENT</Button>
            <Button callback={resetCount} disabled={shouldBtnResetDisable}>RESET</Button>
        </div>
    )
}