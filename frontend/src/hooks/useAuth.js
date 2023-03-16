import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(UserContext)

    if(!context){
        throw Error('The useAuth must be used inside an Context Provider')
    }

    return context
}