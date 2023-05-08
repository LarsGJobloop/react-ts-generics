import { useEffect, useState } from "react";

/**
 * Helper function
 */
async function doFetch<T>(url: string, callback: (data: T) => void) {
    try {
        const response = await fetch(url)
        // "variable as T" forteller TS at denne variable er "T"
        // unsett hva den faktisk måtte være
        const data = await response.json() as T
        
        callback(data)
    } catch (error) {
        
    }
}

// <T> er et type argument til funksjonen
// Tenk på det som et ekstra funksjons argument
// det er fult mulig å gi det flere eks. <T, K, V>
// Konvensjonen er å bruke "T" men du kan kalle de hva du måtte ønske
// <ReturnType> er like gyldig
export function useGenericData<T>(url: string) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)
    const [data, setData] = useState<null | T>(null)

    useEffect(
        () => {
            try {
                doFetch<T>(url, (data) => setData(data))
            } catch (error) {
                setError("Fetch failed")
            } finally {
                setIsLoading(false)
            }
        },
        [url]
    )

    return {
        isLoading,
        error,
        data,
    }
}