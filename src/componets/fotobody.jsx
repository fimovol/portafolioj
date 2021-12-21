
export default function _(){
    const array = [
        {
            url:'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png',
            titulo: 'espero jeje',
        },
        {
            url:'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png',
            titulo: 'espero jeje',
        },
        {
            url:'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png',
            titulo: 'espero jeje',
        },
        {
            url:'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png'
        },
        {
            url:'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png',
            titulo: 'espero jeje',
        },
        
    ]
    const img = 'https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png'
    return(
        <div className="bg-primario3 relative">
            <h1 className="bg-primario3 text-2xl font-mono uppercase pt-8 w-full flex justify-center">foto del body</h1>
            <ul className="mt-10 pb-8 px-[50vw] w-full flex overflow-x-auto gap-8 snap-x">
                {
                    array.map( array =>
                        <li className="snap-center">
                        <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                            <img src={array.url} className="absolute inset-0 w-full h-full object-cover object-bottom"/>
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-secundario1"></div>
                            <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                                <div>
                                    <p className="font-medium text-secundario2">texto generico</p>
                                    <h2 className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-secundario2">
                                        {array.titulo}
                                    </h2>
                                </div>
                                <a href="#" className="px-4 py-3 rounded-lg bg-secundario2 text-primario1 text-sm font-medium">buscar esta cosa</a>
                            </div>
                        </div>
                    </li>
                        )
                }
            </ul>
        </div>
    )
}