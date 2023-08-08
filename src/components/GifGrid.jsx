
import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ categoria }) => {

    
    const { images, isLoading } = useFetchGifs(categoria);
     
    return (
        <>
            <h3>{categoria}</h3>
            
            {
             isLoading && <h2>Cargando....</h2>
             
            }

            <div className='card-grid'>
             {
                images.map((img) => (
                    <GifItem key={img.id} {...img} />
                ))
             }
            </div>
        </>
    )
}

export default GifGrid
