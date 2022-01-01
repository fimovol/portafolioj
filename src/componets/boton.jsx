export default function _(){
  return(
    <button>
            este es un boton
    </button>
  )
}

export function Botondos(){
  return(
    <button>
                este es un boton dosDOS
    </button>
  )
}
export function Boton({nombre}){
  return(
    <button className="font-mono active:bg-secundario2 active:shadow-xl active:shadow-secundario1 place-content-center text-xs bg-transparent hover:bg-primario1 text-secundario1 font-semibold hover:text-primario2 py-2 px-4 border border-secundario1 hover:border-transparent rounded transition"> 
      {nombre}
    </button>
  )
}