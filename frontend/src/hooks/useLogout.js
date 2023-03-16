import { useAuth } from "./useAuth";

export const useLogout = () => {
    const {dispatch} = useAuth()

    const logout = () => {
        // remove the user from localstorage

        localStorage.removeItem('user')

        dispatch({
            type:'LOGOUT'
        })
    }

    return {logout}
}