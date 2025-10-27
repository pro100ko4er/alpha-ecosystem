import api from "../http";
import { ProductAllRequest } from "../types";

export default class ApiService {

    static async get(id: number, fields: string = 'id,title,description,price_display,external_sku,image_url,updated_at') {
        const response = await api.get(`/products/${id}`, {
            params: {
                fields
            }
        })
        return response.data
    }

    static async getAll(limit: number = 100, page: number = 0, fields:string = 'id,title,description,price_display,external_sku,image_url,updated_at') {
        const response = await api.get<ProductAllRequest>('/products', {
            params: {
                limit,
                page,
                fields
            }
        })
        return response.data
    }
}