export interface data{
    id: number
    name: string
    img: string | URL
    price: number
    tags: string[]
    description: string
}

export interface cartData extends data{
    quantity: number
}