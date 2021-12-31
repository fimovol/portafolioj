import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import NotFound from './routes/noencontrado'
import Contactame from './routes/contactame'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/contactame' element={<Contactame />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
