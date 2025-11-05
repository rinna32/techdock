import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ProductPage from "./components/ProductPage";
import ProductItem from "./components/ProductItem";
import IndexPage from "./components/IndexPage";
import CartPage from "./components/CartPage";
import FavouritesPage from "./components/FavouritesPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage
            },
            {
                path: 'products',
                Component: ProductPage
            },
            {
                path: 'products/:id',
                Component: ProductItem
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'favorites',
                Component: FavouritesPage
            }
        ]
    }
])