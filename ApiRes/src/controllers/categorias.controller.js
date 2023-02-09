import { getConnection } from "../database/database";


//listar todos los productos de la base de datos.
const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_categoria, nombre_categoria FROM categorias;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getAll,
};