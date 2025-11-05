import React, { useContext, useState } from 'react'
import { FavCotext } from '../stores'

export default function FavouritesPage() {

    const [fav, setFav] = useContext(FavCotext)
    return (
        <div>
            <h1>Избранное</h1>
            {
                fav.map(product => (
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
