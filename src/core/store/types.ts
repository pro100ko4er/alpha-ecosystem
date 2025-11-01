import { IProduct } from "../types";

export interface ProductState {
    products: IProduct[],
    page: number,
    limit: number,
    total: number,
    total_pages: number,
    filter: 'liked' | 'all'
}

export interface ThemeState {
    theme: 'dark' | 'light'
}