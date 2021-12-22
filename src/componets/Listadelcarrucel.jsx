export const ListadelCarrucel = ({image,name,species,created}) =>{

    return <li className="snap-center">
                <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                    <img src={image} className="absolute inset-0 w-full h-full object-fill object-bottom"/>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-primario3"></div>
                    <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                        <div>
                            <p className="font-medium text-secundario2">
                                {name}
                            </p>
                            <h2 className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-secundario2">
                                {species}
                            </h2>
                        </div>
                        <a href="#" className="px-4 py-3 rounded-lg bg-secundario2 text-primario1 text-sm font-medium">
                            {created}
                        </a>
                    </div>
                </div>
            </li>
}