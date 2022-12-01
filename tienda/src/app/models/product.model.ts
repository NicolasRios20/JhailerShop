export interface Producto{
    id: String;
    name: string;
    precio: number;
    image: string;
    description: string;
}


export interface CrearProducto{
    name: string;
    price: number;
    image: string;
    description: string;
}
