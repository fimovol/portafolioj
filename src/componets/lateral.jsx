import { Button } from "@material-ui/core";
import { purple, red } from '@mui/material/colors';

export default function _(){
    const primary = red[500];

    const myStyle = {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'flex-direction': 'column',
        color: '#ffffff',
        backgroundColor: '#000f00',
        height: '100%',
        width: '100%',
    };
    return(
        <div style={myStyle}>
            <h1>PORTAFOLIO</h1>
            <div>aqui unos puntos</div>
            <div>my nombre es javier</div>
            <Button color={primary} variant="contained" size="small">soy frontend developer</Button>
        </div>
    )
}