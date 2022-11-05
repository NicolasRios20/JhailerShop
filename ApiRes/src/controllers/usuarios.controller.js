import { getConnection } from "../database/database";
var bcrypt = require('bcryptjs');


const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const data= await connection.query("SELECT correo_cliente, contrasena FROM cliente");
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const verificaruser= async (req, res) => {
    const {correo_cliente, contrasena} = req.body;
    if (!correo_cliente || !contrasena) {
        res.status(400).json({ message: "no ingreso sus datos completos" });
    }
    else{
        try {
            let dato = {correo_cliente,contrasena};
            console.log(dato);
            const connection = await getConnection();
            const record = await connection.query('SELECT  nombre_cliente FROM cliente WHERE correo_cliente = ? AND contrasena = ?', [correo_cliente, contrasena]);
            dato = record; 
            if(dato == ""){
                res.status(400).json({ message: "contra invalida" });
                console.log("contrasena invalida")
            }else{
                console.log(dato);
                res.json( dato );
            }
            
        } catch (error) {
            res.status(400).json({ message: "contra invalida" });
            console.log("contrasena invalida")
        }  
    }
};


const add = async (req, res) => {
    
    const {nombre_cliente, correo_cliente, contrasena, ciudad, direccion, telefono, image} = req.body;
    if (!nombre_cliente || !correo_cliente || !contrasena || !ciudad || !direccion || !telefono || !image) {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
    }
    else{
        try {
           let contrai = await bcrypt.hash(contrasena,8);
           console.log(contrai);
           let dato = {
                nombre_cliente:nombre_cliente,
                correo_cliente:correo_cliente,
                contrasena:contrai,
                ciudad:ciudad,
                direccion:direccion,
                telefono:telefono,
                image:image
                };
           try {
                const connection = await getConnection();
                const record = await connection.query("INSERT INTO cliente SET  ?", dato );
                dato.id = record.insertId; 
                res.json( dato );
            } catch (error) {
                res.status(400).json({ message: "ya existe." });
                console.log("ya existe")
            }  
        } catch (error) {
            console.log("no");
        }
        
    }
};


export const methods = {
    getAll,
    add,
    verificaruser
};
