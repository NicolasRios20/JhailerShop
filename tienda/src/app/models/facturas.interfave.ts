export interface FacturasP {
    id_compra: any;
    nombre_proveedor: any;
    valor: any;
    fecha: string;
}

export interface encabezadoFP {
    id_compra: any;
    nombre_proveedor: any;
    cedula: any;
    ubicacion_p: string;
    valor: any;
    fecha: any,
}

export interface productosFP {
    id_compra: any;
    id_producto: any
    nombre_producto: string;
    cantidad: any;
    costo: any;
}
