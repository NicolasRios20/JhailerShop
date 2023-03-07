const nodemeiler = require('nodemailer')



const createTrans = () => {
    const transport = nodemeiler.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:  true,
        auth:{
            user: "nicolasrioscastillo8@gmail.com",
            pass:"klpeyhqsjoabnabu"
        }
    })

    return transport
};

const sendMail = async (dato) =>{
    const transporter = createTrans()
    const info =await transporter.sendMail({
        from: '"nicolas Rios" <nicolasrioscastillo8@gmail.com>',
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

