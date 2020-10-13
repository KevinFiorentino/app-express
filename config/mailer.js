const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport")

let mailConfig;

if (process.env.ENVIRONMENT == "development") {
    mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'dale.mante@ethereal.email',
            pass: '23hmEBheZr5PcJwJDq'
        }
    };
    
}
else if (process.env.ENVIRONMENT == "production") {
    // https://signup.sendgrid.com/
    const options = {
        auth: {
            api_key: process.env.SENGRID_KEY
        }
    }
    mailConfig = sgTransport(options)
}


module.exports = nodemailer.createTransport(mailConfig);
