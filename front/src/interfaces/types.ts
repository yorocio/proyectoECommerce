export interface IProduct {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    categoryId: number,
    stock: number
}

export interface ICardProps {
    product : IProduct;
}

export interface IProductDetailProps {
    params: {
        id: string
    }
    /* name: string */
}

export interface ILoginProps {
    email: string,
    password: string
}

export interface ILoginErrors {
    email?: string,
    password?: string
}

export interface IRegisterProps {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string
}

export interface IRegisterErrors {
    name?: string,
    email?: string,
    password?: string,
    address?: string,
    phone?: string
}

export type TRegisterErrors = Partial<IRegisterProps>

export interface IUserSession {
    token: string,
    user: {
        id: number,
        name: string,
        email: string,
        address: string,
        phone: string,
        role: string
        credential: {
            id: number,
            password: string
        },
        orders: IOrder
    }
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}

