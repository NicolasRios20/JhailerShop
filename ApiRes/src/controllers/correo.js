const nodemeiler = require('nodemailer')



const createTrans = () => {
    const transport = nodemeiler.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:  true,
        auth:{
            user: "shopj2353@gmail.com",
            pass:"hwfxixmrpbunitil"
        }
    })

    return transport
};

const sendMail = async (dato) =>{
    const transporter = createTrans()
    const info =await transporter.sendMail({
        from: '"Jailer Shop" <shopj2353@gmail.com>',
        to: `${dato.correo}`,
        subject: `Bienvenido ha Jailer Shop ${dato.nombre}` ,
        text: 'Por favor, encuentra el archivo PDF adjunto.',
        /*attachments: [{
            filename: 'hola.pdf',
            path: 'uploads/hola.pdf'
        }]*/
    })

    console.log("Message sent: %s", info.messageId)
}

exports.sendMail = (dato) =>sendMail(dato)

