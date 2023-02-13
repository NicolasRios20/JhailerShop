import { getConnection } from "../database/database";

//creacion de proveedor
const add = async (req, res) => {
    
    try {
        const { nombre_proveedor, ubicacion_p, cuenta_bancaria} = req.body;
    
        if(nombre_proveedor === undefined || ubicacion_p === undefined || cuenta_bancaria === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }else{

            let dato = {nombre_proveedor, ubicacion_p, cuenta_bancaria};
            const connection = await getConnection();
            console.log(dato)
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