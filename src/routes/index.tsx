import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import ROUTES from "./routes";
import ProductsPage from "../pages/products-page";
import EditProductPage from "../pages/edit-product-page";
import CreateProductPage from "../pages/create-product-page";

const global_routes: RouteObject[] = [
    {
        path: ROUTES.PRODUCTS_PAGE,
        element: <ProductsPage />,
        index: true,
    },
    {
        path: ROUTES.PRODUCT_PAGE,
        element: <ProductsPage />
    },
    {
        path: ROUTES.CREATE_PRODUCT_PAGE,
        element: <CreateProductPage />,
    },
    {
        path: ROUTES.EDIT_PRODUCT_PAGE,
        element: <EditProductPage />
    },
    {
        path: '*',
        element: <Navigate to={ROUTES.PRODUCTS_PAGE} replace />,
    }
]

export default global_routes