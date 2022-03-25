import {ChangeEvent, useCallback, useMemo, useState} from "react";

export const useSetMonth = () => {
    const [month, setMonth] = useState<number | ''>('')
    const handleExpMonthChange = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        Number.isInteger(+value) && +value < 13 && setMonth(+value)
        !value && setMonth('')
    },[setMonth])
    return useMemo(
        () => ({
            month,
            handleExpMonthChange,
        }),
        [
            month,
            handleExpMonthChange,
        ])
}