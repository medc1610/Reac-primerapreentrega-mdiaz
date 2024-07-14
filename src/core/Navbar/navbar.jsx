import './navbar.css'
import { Carrito } from './carrito/carrito.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function NavbarComponent() {
    return (
        <div className={'grid-navbar'}>
            <div className={'logo'}>
                <img src={'src/assets/react.svg'} alt={'logo'}/>
            </div>
            <div className={'home'}>
                <Button variant="secondary">
                    <Link to={'/'} className={'links-buttons'}>HOME</Link>
                </Button>
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
                        <Link to={'/category/inversores'} className={'dropdown-links'}>
                            <Dropdown.Item as="button">Inversores</Dropdown.Item>
                        </Link>
                        <Link to={'/category/baterias'} className={'dropdown-links'}>
                            <Dropdown.Item as="button">Baterias</Dropdown.Item>
                        </Link>
                        <Link to={'/category/paneles'} className={'dropdown-links'}>
                            <Dropdown.Item as="button">Paneles</Dropdown.Item>
                        </Link>
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
    )
}
