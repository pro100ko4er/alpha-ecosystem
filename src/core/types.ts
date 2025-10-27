export interface IProduct {
    id: number,
    title: string,
    description: string,
    price_display: string,
    external_sku: number,
    image_url: string,
    updated_at: string
}

export interface ProductAllRequest {
    data: IProduct[],
    config: {
        iiif_url: string,
        website_url: string
    },
    info: {
        license_links: string[],
        license_text: string,
        version: string
    },
    pagination: {
        current_page: number,
        limit: number,
        next_url: string,
        offset: number,
        total: number,
        total_pages: number
    }
}