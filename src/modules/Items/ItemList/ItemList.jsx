import { Item } from '../Item/Item.jsx';
import './ItemList.css'

export const ItemList = ({products}) => {
    return (
        <div className={"item-custom-flex"}>
            {products.map((product) => {
                return (
                    <Item key={product.id} {...product}/>
                )
            })}
        </div>
    )
}
