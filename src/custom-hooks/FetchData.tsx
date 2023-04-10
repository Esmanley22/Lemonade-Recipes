
import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    // use means hook
    useEffect( () => {
        handleDataFetch();
    }, [])
    //with nothing there it will occur everytime something changes
    //with just "[]" there nit will occur on mount
    //

    return { contactData, getData:handleDataFetch }
}