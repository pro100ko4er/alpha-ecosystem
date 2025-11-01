import { AxiosError } from "axios"
import { useState } from "react"

export default function useFetch(callback: () => Promise<any>): [callback: () => Promise<any>, isLoading: boolean, error: string] {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            setError('')
            const data = await callback()
            return data
        } catch (error) {
            if(error instanceof AxiosError) {
                setError(error.message)
            }
            else if(error instanceof Error) {
                setError(error.message)
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}