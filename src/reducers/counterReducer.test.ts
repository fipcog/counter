import { counterReducer, counterStateType, incrementCountAC, resetCounterAC, setErrorAC, setInitialCountAC, setLimitCountAC } from "./counterReducer"

let initialState: counterStateType

beforeEach(()=>{
    initialState = {
        initialCount: 0,
        limitCount: 5,
        currentCount: 2,
        error: ''
    }
})

test('setting initial count', () => {
    const result = counterReducer(initialState, setInitialCountAC(3))

    expect(result.initialCount).toBe(3)
})

test('setting limit count', () => {
    const result = counterReducer(initialState, setLimitCountAC(12))

    expect(result.limitCount).toBe(12)
})

test('setting error', () => {
    const result = counterReducer(initialState, setErrorAC('incorrect'))
    expect(result.error).toBe('incorrect')
})

test('incrementing count', () => {
    const result = counterReducer(initialState, incrementCountAC())
    expect(result.currentCount).toBe(3)
})

test('incrementing count', () => {
    const result = counterReducer(initialState, resetCounterAC())
    expect(result.currentCount).toEqual(result.initialCount)
})
