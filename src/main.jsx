import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import NotFound from './routes/noencontrado'
import Contactame from './routes/contactame'
import Descripcion from './componets/descipcion'
import Blog from './componets/blog'
import Imagenesmisproyectos from './componets/imagenesmisproyectos'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/contactame' element={<Contactame />} />
      <Route path='/about' element={<Descripcion/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/quepuedohacer' element={<Imagenesmisproyectos/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
