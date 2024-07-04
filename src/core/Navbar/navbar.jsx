import './navbar.css'
import { Carrito } from './carrito/carrito.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';

export function NavbarComponent() {
    return (
        <>
            <div className={'grid-navbar'}>
                <div className={'logo'}>
                    <img  src={'src/assets/react.svg'} alt={'logo'}/>
                </div>
                <div className={'home'}>
                    <Button variant="secondary">HOME</Button>
                </div>
                <div className={'nosotros'}>
                    <Button variant="secondary">NOSOTROS</Button>
                </div>
                <div className={'productos'}>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            PRODUCTOS
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Categoria1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Categoria2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Categoria3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={'contacto'}>
                    <Button variant="secondary">CONTACTO</Button>
                </div>
                <div className={'carrito'}>
                    <Carrito/>
                </div>

            </div>

        </>


    )
}
