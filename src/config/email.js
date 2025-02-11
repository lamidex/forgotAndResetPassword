const nodemailer = require('nodemailer');


exports.sendEmail = async ( msg, subject, receiver) => {
    try{
        const transporter = nodemailer.createTransport({
            host: 'pop.gmail.com',
            port: 465,
            secure: true,
            auth: {
             user: 'olamidestephen81@gmail.com',
             pass:"dxvzxyezuywwmfil"
            },
            tls: {
                rejectUnauthorised: false
            }
        })
        const info = await transporter.sendMail({
            from: "Lamidex <olamidestephen81@gmail.com>",
            subject: subject,
            html: msg,
            to: receiver,
        })
        return `Message sent', ${nodemailer.getTestMessageUrl(info)}`
    } catch (err) {
        console.error(err);
        throw new Error("Error sending email");
    }
}