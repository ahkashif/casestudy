import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';

const ProductCard = (props) => {
  const { product } = props;
  const [cartValue, setCartValue] = useState();
  const cartItems = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();

  const addItemToCart = (data) => {
    setCartValue(data);
    data = {...data, 'count': 1}
    dispatch(addItem(data));
  }

  return (
    <div className='productCard'>
      <h3 className='productCard__heading'>{product.name}</h3>
      <img className='productCard__image' src={`http://localhost:3000${product.imageURL}`} />
      <p className='productCard__description'>{product.description}</p>
      <div className='productCard__priceWrapper'>
        <span className='productCard__price'>{`MRP Rs.${product.price}`}</span>
        {
          cartValue
            ? <button className='productCard__button productCard__button--addedToCart'>Added to Cart</button>
            : <button className='productCard__button productCard__button--buynow' onClick={ () => addItemToCart(product)}>Buy now</button>
        }
      </div>
    </div>
  )
}

export default ProductCard;