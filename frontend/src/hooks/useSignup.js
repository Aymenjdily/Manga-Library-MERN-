import { useState } from "react";
import { useAuth } from "./useAuth";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuth()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const res = await fetch(`/api/user/signup`, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username, email, password})
        })

        const data = await res.json()

        if(!res.ok){
            setIsLoading(false)
            setError(data.error)
        }

        if(res.ok){
            setIsLoading(false)

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(data))
            
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        }
    }

    return { signup, isLoading, error}
}