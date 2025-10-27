import { createBrowserRouter, RouteObject } from "react-router";
import App from "../App";
import ROUTES from "./routes";
import ProductsPage from "../pages/products";

const global_routes: RouteObject[] = [
    {
        path: ROUTES.MAIN_PAGE,
        element: <App />,
    },
    {
        path: ROUTES.PRODUCTS_PAGE,
        element: <ProductsPage />
    },
    {
        path: ROUTES.PRODUCTS_PAGE,
        element: <ProductsPage />
    }
]

export default global_routes