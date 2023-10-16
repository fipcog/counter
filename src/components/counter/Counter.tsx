import React, { useState } from "react";
import { Countboard } from "../countboard/Countboard";
import { Button } from "../btn/Btn";
import "./CounterStyles.scss";

type CounterPropsTypes = {
    initialCount: number
    limitCount: number
}

export const Counter: React.FC<CounterPropsTypes> = ({initialCount, limitCount}) => {
    const [count, setCount] = useState<number>(initialCount)

    const incrCount = (): void => {
        if (count < limitCount) setCount(count + 1)
    }

    const resetCount = (): void => {
        setCount(initialCount)
    }

    return (
        <div className="counter">
            <Countboard limitCount={limitCount}>{count}</Countboard>
            <Button callback={incrCount} disabled={count >= limitCount}>INCREMENT</Button>
            <Button callback={resetCount} disabled={!count}>RESET</Button>
        </div>
    )
}