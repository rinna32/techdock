import React, { useContext, useState } from 'react'
import { CartContext } from '../stores'

export default function CartPage() {

    const [cart, setCart] = useContext(CartContext)
    return (
        <div>
            <h1>Корзина</h1>
            {
                cart.map(product => (
                    <div>
                        <h3>{product.title}</h3>
                        {/* <img src={product.images[0]} alt="" /> */}
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button
                            className='bg-red-500 px-2 py-1 text-white'
                        >Удалить</button>
                    </div>
                ))
            }
        </div>
    )
}
