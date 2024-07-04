import './carrito.css'
import { useState } from 'react';





export function Carrito(){

    const [state, setState] = useState(0);

    return (
        <>
            <div className={'carrito-container'} >
                <img className={'carrito-img'} src={'src/assets/carrito.webp'} alt={'carrito'}/>
                <div className={'carrito-cantidad'}>
                    {state}
                </div>
            </div>

        </>
    )
}
