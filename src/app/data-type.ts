export interface signUp{
    name: string;
    password: string;
    email: string;
    id?: number;
}

export interface login{
    password: string;
    email: string;
    id?: number;
}

export interface product{
    product_name: string;
    product_price: number;
}