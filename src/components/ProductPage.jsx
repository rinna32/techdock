import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext, FavCotext } from '../stores'
import { Rate } from 'antd'

export default function ProductPage() {

    const [products, setProduct] = useState([])

    const [cart, setCart] = useContext(CartContext)

    const [fav, setFav] = useContext(FavCotext)

    function addToCart(product) {
        setCart(
            [
                ...cart, product
            ]
        )

    }

    function addToFav(product) {
        setFav(
            [
                ...fav, product
            ]
        )
    }

    useEffect(() => {
        async function getProducts() {
            const resp = await fetch(`https://api.escuelajs.co/api/v1/products`)
            if (resp.ok) {
                const data = await resp.json()
                setProduct(data.slice(0, 8))
            }
        }
        getProducts()
    })
    return (
        <div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    products.map(product => (
                        <div key={product.id}>
                            <NavLink to={`/products/${product.id}`}>
                                <img
                                    src={product.images[0]}
                                    alt=""
                                    className="w-full h-80 object-cover border border-gray-500"
                                />
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <span
                                        className="w-4 h-4 inline-block"
                                        style={{ backgroundColor: product.color || '#000' }}
                                    ></span>
                                    <span className="text-sm text-gray-500">+6</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3>{product.category.name}</h3>
                                    <p>${product.price}</p>
                                </div>
                            </NavLink>
                            <Rate allowHalf defaultValue={4.5} />
                            <div className="flex flex-col items-start">
                                <button
                                    onClick={() => addToCart(product)}
                                    className='bg-black px-2 py-1 text-white rounded-full text-sm'>
                                    Купить
                                </button>

                                <button
                                    onClick={() => addToFav(product)}
                                    className='bg-black px-2 py-1 text-white rounded-full text-sm mt-1'>
                                    Избранное
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
