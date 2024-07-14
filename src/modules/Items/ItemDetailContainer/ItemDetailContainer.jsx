import { useEffect, useState } from 'react';
import { getProductById} from '../../../asyncMock.js';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx';

export function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getProductById(id).then((data) => {
            setProduct(data);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);
    return (
        <ItemDetail product={product}/>
    )
}
