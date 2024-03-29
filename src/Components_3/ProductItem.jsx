import React from 'react';

//data viene del objeto productos del shoopingInitial
//addToCart esta definida en carrito de compras en shoopingCart
const Productitem = ({data, addToCart}) => {
    
    let {id, name, price} = data

    return (
        <div style={{border:'thin solid gray', padding:'1rem'}}>
            <h4>{name}</h4>
            <h5>$ {price}.00</h5>
            <button onClick={()=>addToCart(id)}>agregar</button>
        </div>
    );

}

export default Productitem;
