import { useAuth } from "./useAuth";
import { useState } from "react";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuth()

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const res = await fetch('/api/user/login', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        const json = await res.json()

        if(!res.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(res.ok){
            setIsLoading(false)

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            
            dispatch({
                type: 'LOGIN',
                payload: json
            })
        }
    }

    return { login, isLoading, error }
}