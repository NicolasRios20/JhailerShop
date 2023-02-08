import { getConnection } from "../database/database";
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

//  consultar todos los usuarios
const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const data= await connection.query("SELECT correo, contrasena FROM cliente");
        res.json(data);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


// registro de usuarios 
const add = async (req, res) => {
    const {nombre, correo, contrasena} = req.body;
    if (!nombre || !correo || !contrasena ) {
        res.status(400).json({ message: "Ingrese los campos requeridos" });
    }
    else{
        let contrai = await bcrypt.hash(contrasena,8);
           let dato = {
                nombre:nombre,
                correo:correo,
                contrasena:contrai,
            };
            try {
                const connection = await getConnection();
                const record = await connection.query("INSERT INTO cliente SET ?", [dato] );
                console.log("registro exitoso");
                res.json( dato );
            } catch {
                console.log("ya existe el correo");
                res.status(400).json({ message: "El correo ya se encuentra registrado." });
            } 
    }
};

// autenticacion de datos login 
const verificaruser= async (req, res) => {
    console.log("hola");
    const {correo, contrasena} = req.body;
    if (!correo || !contrasena) {
        res.status(400).json({ message: "no ingreso sus datos completos" });
    }
    else{
        try {
            let dato = {correo,contrasena};
            const connection = await getConnection();
            connection.query('SELECT  * FROM cliente WHERE correo = ?', correo,(err,result)=>{
                if(err) {
                    console.log(err);
                }else {
                    var data = JSON.parse(JSON.stringify(result));
                    let contras = data[0].contrasena;
                    const equals = bcrypt.compareSync(req.body.contrasena, contras);
                    if (equals != true) {
                        res.status(400).send({message: 'contrasena invalida'})
                    } else {
                        jwt.sign({correo}, 'secret_key', (err,token)=>{
                            if(err) {
                                console.log(err);
                            }else {
                                console.log(token);
                                res.json(token)
                            }
                        })
                    }
                    
                }
            })  
        } catch (error) {
            res.status(400).json({ message: "contra invalida" });
            console.log("contrasena invalida")
        }  
    }
};

// actualizar datos de usuario 
const actualizardatos = async (req, res) => {

    try {
        const { id_cliente } = req.params;
        const { nombre, correo, direccion ,  ciudad, telefono } = req.body;
    
        if (nombre === undefined || correo === undefined || direccion === undefined || ciudad === undefined || telefono === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
    
        const datos = { nombre, correo, direccion , ciudad, telefono };
        console.log(datos)
        const connection = await getConnection();
        const result = await connection.query("UPDATE cliente SET ? WHERE id_cliente = ?", [datos,id_cliente]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };
    


export const methods = {
    getAll,
    add,
    verificaruser,
    actualizardatos
};




