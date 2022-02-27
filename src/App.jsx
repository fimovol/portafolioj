import Header from './componets/header'
import Body from './componets/body'
import Footer from './componets/footer'
import './estilos.css'
import {  useState } from 'react'

function App() {
  const [getx,setx] = useState(null)
  const [gety,sety] = useState(null)
  document.addEventListener('mousemove',e =>{
    setx(e.x)
    sety(e.y)
  })
  const degradado = (getx-gety)/8
  return (
    <div className="App jeje" style={{background:`linear-gradient(${degradado}deg, rgba(34,97,195,1) 0%, rgba(45,253,135,1) 100%)`}}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
