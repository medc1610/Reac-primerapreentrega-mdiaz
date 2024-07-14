export const ItemDetail = ({product}) => {
    return (
        <article>
            <h2>{product.name}</h2>
            <img src={product.imagen} alt={product.name}/>
            <p>{product.subtitulo}</p>
            <p>{product.description}</p>
            <p>${product.precio}</p>
            <p>{product.cantidad}</p>
            <p>{product.categoria}</p>
            <p>{product.marca}</p>
            <img src={product.imagenMarca} alt={product.marca}/>

        </article>
    )
}
