export interface Credencials {
    email: string;
    password: string;
}

export interface User {
    email: string;
    name: string;
}

export interface Brand {
    id: string;
    name: string;
}

export interface Auth {
    user: User;
    token: string;
}

export interface VehicleForm {  
    id?: string;  
    model: string;
    year: number;
    value: number;
    urlImage: string;
    brandId: string;
}

export interface Vehicle {
    id: string;
    modelo: string;
    year: number;
    value: number;
    urlImage: string;
    brand: Brand
}

export interface Indicator {
    brand: string;
    quantity: number;
    amount: number;
}