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
        <div className=" relative">
            <h1 className="text-4xl font-mono mt-14 w-full flex justify-center underlin uppercase">ejemplo obtener datos de api rick y morty</h1>
            <ul className="mt-10 pb-8 px-[50vw] w-full flex overflow-x-auto gap-8 snap-x">
                {
                    hola.map( array =>
                        <ListadelCarrucel 
                            key={array.id} 
                            image={array.image} 
                            name={array.name} 
                            species={array.species}
                            created={array.created}
                            url={array.url}
                            />
                        )
                }
            </ul>
        </div>
    )
}