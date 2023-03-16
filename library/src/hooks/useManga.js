import { MangaContext } from "../context/mangaContext";
import { useContext } from "react";

export const useManga = () => {
    const context = useContext(MangaContext)

    if(!context) {
        throw Error('use the Context Provider inside the App')
    }

    return context
}