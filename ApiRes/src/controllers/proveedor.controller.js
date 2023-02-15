import { getConnection } from "../database/database";

//creacion de proveedor
const add = async (req, res) => {
    
    try {
        const { nombre_proveedor, ubicacion_p, cuenta_bancaria, cedula} = req.body;
        
        if(nombre_proveedor === undefined || ubicacion_p === undefined || cuenta_bancaria === undefined || cedula === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }else{
            const dato = {cedula, nombre_proveedor, ubicacion_p, cedula};
            console.log(dato)
            const connection = await getConnection();
            await connection.query(`INSERT INTO proveedor SET ?`, dato);
            res.json( dato );

        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    add,
};