import Navbar from "./navbar";
import Lateral from "./lateral";
import Foto from "./fotoheader";


export default function _(){
    const style = {
        display: 'grid',
        'grid-template-columns': '4fr 7fr',
        width: '100%',
        height: '100%',
    }
    const divstyle = {
        display: 'grid',
        'grid-template-rows': '1fr 10fr',
    }
    return(
        <div style={style}>
            <Lateral/>
            <div style={divstyle}>
                <Navbar/>
                <Foto/>
            </div>
            
        </div>
    )
}