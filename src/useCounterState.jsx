import { useContext, useState } from "react"
import { CounterContext } from "./context"

export default function useCounterState () {
    const value = useContext(CounterContext)
    if(value === undefined) {
        throw new Error("useCounterState should be used within CounterProvider")
    }
    return value
}