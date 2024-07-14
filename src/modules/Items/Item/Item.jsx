import { Link } from 'react-router-dom';

export const Item = ({id, nombre, imagen, categoria, precio}) => {
    console.log(imagen)
    return (
        <article>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre}/>
            <p>Categoria: {categoria}</p>
            <p>Precio: {precio}</p>
            <Link to={`/detalle/${id}`}>
                Ver Detalle
            </Link>
        </article>
    )
}
