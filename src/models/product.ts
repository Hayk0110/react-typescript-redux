

export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export interface IProductDetail{
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}