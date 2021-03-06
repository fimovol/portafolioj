import { Link } from 'react-router-dom'

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
export function Boton({nombre,url,urllink}){
  const botonconestilos=(
    <button className="font-mono active:bg-secundario2 active:shadow-xl active:shadow-secundario1 place-content-center text-xs bg-transparent hover:bg-primario1 text-secundario1 font-semibold hover:text-primario2 py-2 px-4 border border-secundario1 hover:border-transparent rounded transition">
      {nombre}
    </button>
  )
  if(url){
    return <a href={url} target="_blank" rel="noreferrer">
      {botonconestilos}
    </a>
  }
  if(urllink){
    return <Link to={urllink}>
      {botonconestilos}
    </Link>
  }
  return botonconestilos
}