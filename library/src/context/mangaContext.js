import { createContext, useReducer } from "react";

export const MangaContext = createContext()

export const mangaReducer = (state, action) => {
    switch(action.type){
        case 'SET_MANGA':
            return {
                mangas: action.payload
            }
        default:
            return state
    }
}

export const MangaContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mangaReducer, {
        mangas: null
    })
    
    return(
        <MangaContext.Provider value={{...state, dispatch}}>
            {children}
        </MangaContext.Provider>
    )
}