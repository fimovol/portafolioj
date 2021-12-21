import { useEffect, useState } from "react"
import { fetchData } from "../services/getData";
import { ListadelCarrucel } from "./Listadelcarrucel";

export default function _(){
    const [hola,sethola] = useState([]);
    useEffect(()=>{
        fetchData().then((res)=>
            sethola(res)
        )
        
    },[])
    
    return(
        <div className="bg-primario3 relative">
            <h1 className="text-4xl font-mono pt-8 w-full flex justify-center underline text-secundario2">ejemplo obtener datos de api rick y morty</h1>
            <ul className="mt-10 pb-8 px-[50vw] w-full flex overflow-x-auto gap-8 snap-x">
                {
                    hola.map( array =>
                        <ListadelCarrucel 
                            key={array.id} 
                            image={array.image} 
                            name={array.name} 
                            species={array.species}
                            created={array.created}/>
                        )
                }
            </ul>
        </div>
    )
}