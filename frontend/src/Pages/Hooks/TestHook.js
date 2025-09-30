import axios from "axios"
import { useState } from "react"

export function useTestHook(){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleApiCall(url){
        try{
            setLoading(true)
            const call = await axios.get(url)
            const currData = call.data
            setData(currData)
        }catch(e){
            setError(e.message || "error occured")
        }finally{
            setLoading(false)
        }

    }

    return {
        loading,
        data,
        error,
        handleApiCall
    }
}