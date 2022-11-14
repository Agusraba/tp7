import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/productos';
import Home from './views/home';
import Product from './components/producto';
import DetalleProd from './components/detalleProd';
import { ContextProvider } from './Context';
import QuienesSomos from './views/quienesSomos';
import Carrito from './views/Carrito';
import Contacto from './views/Contacto';


function App() {
  return (
    <div className='App'>
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<DetalleProd />} />
            <Route path="/contact" element={<Contacto />}/>
            <Route path="quienesSomos" element={<QuienesSomos/>}/>
            <Route path="carrito" element={<Carrito/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}


export default App;
