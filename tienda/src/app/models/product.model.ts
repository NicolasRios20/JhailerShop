export interface Producto{
    id: String;
    nombre_producto: string;
    cantidad: number;
    precio_producto: number;
    id_categoria: number
    descripcion: string;
}


export interface CrearProducto{
    nombre_producto: string;
    cantidad: number;
    precio_producto: string;
    id_categoria:number
    descripcion: string;
}
