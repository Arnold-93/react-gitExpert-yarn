import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categoria, setCategoria] = useState(['One Punch'])

    const addCategoria = (text) => {
        //VALIDAMOS QUE NO SE PUEDA INSERTAR UN VALOR REPETIDO
        if(categoria.includes(text)) return;
        setCategoria (cat => [ text, ...cat ]);

    }
    
    return (
        <>
            <h1>GifExpert-APP</h1>
            {/**con el addCategoria envianmos una funcion para poder recivir el valor */}
            <AddCategory onInputValue={(event) => addCategoria(event)} />

            {
                categoria.map(cat => <GifGrid key={cat} categoria={cat} />)
            }

        </>
    )
}

export default GifExpertApp

