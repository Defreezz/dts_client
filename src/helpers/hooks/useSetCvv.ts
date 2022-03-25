import {ChangeEvent, useCallback, useMemo, useState} from "react";

export const useSetCvv = () => {
    const [cvv, setCvv] = useState<number | ''>('')
    const handleCvvChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        Number.isInteger(+value) && value.length <= 3 && setCvv(+value)
        !value && setCvv('')
    }, [setCvv])
    return useMemo(
        () => ({
            cvv,
            handleCvvChange,
        }),
        [
            cvv,
            handleCvvChange,
        ])
}