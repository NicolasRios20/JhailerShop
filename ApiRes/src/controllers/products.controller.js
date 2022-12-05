import { getConnection } from "../database/database";

const getById = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const connection = await getConnection();
        const result = await connection.query("call listar_producto(?)", id_producto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("call listar_productos()");
        const datos = result.shift(1) ;
        console.log(datos)
        res.json(datos);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const add = async (req, res) => {
    
    try {
        const { nombre_producto, cantidad, precio_producto, id_categoria, descripcion} = req.body;
    
        if(nombre_producto === undefined || cantidad === undefined || precio_producto === undefined || id_categoria === undefined || id_categoria === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }else{
            const imagen_producto = req.files.file;
            const nombre_imagen = new Date().getTime()+'.png'
            imagen_producto.mv('./uploads/'+nombre_imagen);
            let dato = {nombre_producto, cantidad , precio_producto, id_categoria, id_categoria, nombre_imagen};
            const connection = await getConnection();
            const record = await connection.query(`call crear_producto('${nombre_producto}',${cantidad},${precio_producto},${id_categoria},'${nombre_imagen}','${descripcion}')`);
            res.json( record );
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido } = req.body;

        if (id === undefined || nombre === undefined || apellido === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const datos = { nombre, apellido };
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE id = ?", datos);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteById = async (req, res) => {
    try {
        const { nombre_producto } = req.params;
        const connection = await getConnection();
        console.log(nombre_producto)
        const result = await connection.query("call eliminar_producto(?)", nombre_producto);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getById,
    getAll,
    add,
    updateById,
    deleteById
};
