import { getConnection } from "../database/database";
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')


const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const data= await connection.query("SELECT correo_cliente, contrasena FROM cliente");
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
            const connection = await getConnection();
            connection.query('SELECT  * FROM cliente WHERE correo_cliente = ?', correo_cliente,(err,result)=>{
                if(err) {
                    console.log(err);
                }else {
                    var data = JSON.parse(JSON.stringify(result));
                    let contras = data[0].contrasena;
                    const equals = bcrypt.compareSync(req.body.contrasena, contras);
                    if (equals != true) {
                        res.status(400).send({message: 'contrasena invalida'})
                    } else {
                        jwt.sign({result}, 'secret_key', (err,token)=>{
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


const add = async (req, res) => {
    
    const {nombre_cliente, correo_cliente, contrasena} = req.body;
    if (!nombre_cliente || !correo_cliente || !contrasena ) {
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
