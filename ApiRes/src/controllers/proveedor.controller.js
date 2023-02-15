import { getConnection } from "../database/database";

//creacion de proveedor
const add = async (req, res) => {
    
    try {
        const { nombre_proveedor, ubicacion_p, cedula, cuenta_bancaria} = req.body;
        
        if(!nombre_proveedor || !ubicacion_p || !cedula || !cuenta_bancaria ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }else{
            const dato = {cedula, nombre_proveedor, ubicacion_p, cuenta_bancaria};
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