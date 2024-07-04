import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavbarComponent } from './core/Navbar/navbar.jsx';
import { Home } from './modules/home/home.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavbarComponent/>
        <div className={'grid-container'}>
            <Home/>
        </div>
    </React.StrictMode>,
)
