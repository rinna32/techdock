import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { CartContext, FavCotext } from '../stores'

export default function MainLayout() {

    const [cart, setCart] = useState([])

    const [fav, setFav] = useState([])

    return (
        <FavCotext value={[fav, setFav]}>
            <CartContext value={[cart, setCart]}>
                <div className='container mx-auto'>
                    <header className="flex gap-x-5 justify-center py-4 relative">
                        <NavLink to="/" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            На главную
                        </NavLink>
                        <NavLink to="/products" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            К товарам
                        </NavLink>

                        <div className="relative">
                            <NavLink to="/favorites" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Избранное
                            </NavLink>
                            <div className='absolute -top-2 -right-2 text-xs bg-red-500 w-5 h-5 flex items-center justify-center text-white rounded-full pointer-events-none'>
                                {fav.length}
                            </div>
                        </div>

                        <div className="relative">
                            <NavLink to="/cart" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Корзина
                            </NavLink>
                            <div className='absolute -top-2 -right-2 text-xs bg-red-500 w-5 h-5 flex items-center justify-center text-white rounded-full pointer-events-none'>
                                {cart.length}
                            </div>
                        </div>
                    </header>

                    <main>
                        <Outlet />
                    </main>
                    <footer></footer>
                </div>
            </CartContext>
        </FavCotext>
    )
}
