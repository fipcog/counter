import React, { useState } from "react";
import { Countboard } from "../countboard/Countboard";
import { Button } from "../btn/Btn";
import "./CounterStyles.scss";

export const Counter: React.FC = () => {
    const initialCount = 0
    const limitCount = 5
    const [count, setCount] = useState<number>(initialCount)

    const incrCount = (): void => {
        if (count < limitCount) setCount(count + 1)
    }

    const resetCount = (): void => {
        setCount(0)
    }

    return (
        <div className="counter">
            <Countboard limitCount={limitCount}>{count}</Countboard>
            <Button callback={incrCount} disabled={count >= limitCount}>INCREMENT</Button>
            <Button callback={resetCount} disabled={!count}>RESET</Button>
        </div>
    )
}