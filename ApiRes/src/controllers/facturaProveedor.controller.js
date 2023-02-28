import { getConnection } from "../database/database";

const getid_factura = async (req, res) => {
    try {
        const {} = req.params;
        const connection = await getConnection();
        const data= await connection.query("SELECT max(id_compra) FROM compra_proveedor");
        const id_factura = data[0]["max(id_compra)"]
        res.json(id_factura);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getid_factura
};