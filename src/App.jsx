import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Contact, Product } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/product/:productId' element={<Product />}></Route>
          <Route path='*' element={<><h2>Error 404</h2><h3>La pagina no existe</h3></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
