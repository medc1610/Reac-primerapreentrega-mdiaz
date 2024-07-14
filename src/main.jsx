import ReactDOM from 'react-dom/client'
import { NavbarComponent } from './core/Navbar/navbar.jsx';
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './modules/Items/itemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './modules/Items/ItemDetailContainer/ItemDetailContainer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavbarComponent/>
        <Routes>
            <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"}/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
)
