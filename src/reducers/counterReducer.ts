import { ErrorType } from "../App";

export type counterStateType = {
    initialCount: number
    limitCount: number
    currentCount: number
    error: ErrorType
}

const initialState: counterStateType = {
    initialCount: 0,
    limitCount: 5,
    currentCount: 0,
    error: ''
}

export const counterReducer = (state = initialState , action: combinedActionTipe) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            if(state.currentCount < state.limitCount) {
                return {...state, currentCount: state.currentCount + 1}
            } else {
                return state
            }
        case 'RESET_COUNTER':
            return {...state, currentCount: state.initialCount}
        case 'SET_INITIAL_COUNT':
            return {...state, initialCount: action.payload.initialNumber}
        case 'SET_LIMIT_COUNT':
            return {...state, limitCount: action.payload.limitCount}
        case 'SET_ERROR':
            return {...state, error: action.payload.error}
        default:
            return state
    }
}

type combinedActionTipe = incrementCount | setInitialCount | setLimitCount | setError | resetCounter

type incrementCount = ReturnType<typeof incrementCountAC>
export const incrementCountAC = () => {
    return {
        type: 'INCREMENT_COUNT'
    } as const
}

type setInitialCount = ReturnType<typeof setInitialCountAC>
export const setInitialCountAC = (initialNumber: number) => {
    return {
        type: 'SET_INITIAL_COUNT',
        payload: {
            initialNumber
        }
    } as const
}

type setLimitCount = ReturnType<typeof setLimitCountAC>
export const setLimitCountAC = (limitCount: number) => {
    return {
        type: 'SET_LIMIT_COUNT',
        payload: {
            limitCount
        }
    } as const
}

type setError = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: ErrorType) => {
    return {
        type: 'SET_ERROR',
        payload: {
            error
        }
    } as const
}

type resetCounter = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {
        type: 'RESET_COUNTER'
    } as const
}