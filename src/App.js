import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlataformaDeDatos from './components/PlataformaDeDatos/PlataformaDeDatos';
import ProductoDetallado from './components/ProductoDetallado/ProductoDetallado';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'
library.add(fas, faFontAwesome)



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<PlataformaDeDatos />}></Route>
          <Route path='category/:category' element={<PlataformaDeDatos />}></Route>
          <Route path='item/:id' element={<ProductoDetallado />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
