import {ChangeEvent, useCallback, useMemo, useState} from "react";

export const useSetYear = () => {
    const [year, setYear] = useState<number | ''>('')
    const handleExpYearChange =useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        Number.isInteger(+value) && +value < 2100 && setYear(+value)
        !value && setYear('')
    },[setYear])
    return useMemo(
        () => ({
            year,
            handleExpYearChange,
        }),
        [
            year,
            handleExpYearChange,
        ])
}