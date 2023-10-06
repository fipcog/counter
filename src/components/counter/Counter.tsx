import React, { useState } from "react";
import { Countboard } from "../countboard/Countboard";
import { Button } from "../btn/Btn";
import "./CounterStyles.scss";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const incrCount = (): void => {
        setCount(count + 1)
    }

    const resetCount = (): void => {
        setCount(0)
    }

    return (
        <div className="counter">
            <Countboard>{count}</Countboard>
            <Button callback={incrCount} disabled={count >= 5}>INCREMENT</Button>
            <Button callback={resetCount} disabled={!count}>RESET</Button>
        </div>
    )
}