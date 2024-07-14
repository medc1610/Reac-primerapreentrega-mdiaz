import { getProducts, getProductsByCategory } from '../../../asyncMock.js';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getProductsByCategory(id).then((data) => {
                setProducts(data);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            getProducts().then((data) => {
                setProducts(data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [id]);
    return (
        <div>
            <h1>{greetings}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;
