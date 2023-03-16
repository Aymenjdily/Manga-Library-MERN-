import { createContext, useReducer } from "react";

export const MangaContext = createContext()

export const mangaReducer = (state, action) => {
    switch(action.type){
        case 'SET_MANGA':
            return {
                mangas: action.payload
            }
        case 'CREATE_MANGA':
            return{
                mangas: [action.payload, ...state.mangas]
            }
        case 'DELETE_MANGA':
            return {
                mangas: state.mangas.filter((w) => w._id !== action.payload._id)
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