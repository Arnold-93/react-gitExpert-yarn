import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    /**
     * El useEffect recive 2 parametro : una funciones () => {} primera accion 
     * y [] un listado de acciones que se haran despues de ejecutar el "primero proceso"
    */
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const resultImage = async () => {
        setImages(await getGifs(categoria));
        setIsLoading(false)
    }

    useEffect(() => {
        resultImage();
    }, [])

    return {
        images,
        isLoading
    }
}