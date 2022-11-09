export interface Category {
    category_id: number
    name: string
}

export interface Type {
    type_id: number
    name: string
}

export interface Brand {
    brand_id: number
    name: string
}

export interface Product {
    title: string
    id: number
    id_mod: string
    price: number
    count: number
    description: string
    images: string[]
    color: string

    vote_average: number
    vote_count: number
}
