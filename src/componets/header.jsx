import Navbar from "./navbar";
import Lateral from "./lateral";
import Foto from "./fotoheader";


export default function _(){

    return(
        <>
            <Navbar/>
            <div className="grid grid-cols-1 place-items-center w-full h-full md:grid-cols-2">
                <Lateral/>
                <div className="flex flex-col mt-8 md:mt-0">
                    <Foto/>
                </div>
                
            </div>
        </>
    )
}