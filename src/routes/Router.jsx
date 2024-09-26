import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Category from "../pages/Category";
import Cart from "../pages/Cart";


const router = createBrowserRouter([
    {
        path : "/",
        element: <MainLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/product-detail/:id",
                element: <ProductDetail/>
            },
            {
                path:"/shop",
                element: <Shop/>
            },
            {
                path:"/category/:title",
                element: <Category/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ]
    }
])

export default router;