import estilos from '../estilos/navbardefault.module.css'
export default function _(){
    return (
        <div className={estilos.div}>
            <p>
                <a href="#">casa</a>
            </p>
            <p>
                <a className='sm:hover:ring-2 ring-gray-900 dark:ring-yellow-300 w-1/4 sm:w-auto p-2 rounded-lg flex text-xs sm:text-base flex-col sm:flex-row items-center gap-1 hover:text-gray-900 transition dark:hover:text-yellow-300 text-gray-500 dark:text-gray-100' href="#">sobre mi</a>
            </p>
            <p>
                <a href="#">trabajos</a>
            </p>
            <p>
                <a href="#">blog</a>
            </p>
            <p>
                <a href="#">contactame</a>
            </p>
        </div>
    )
}