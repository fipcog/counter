import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type RootAppStoreType = ReturnType<typeof rootReducer>
