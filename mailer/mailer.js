const nodemailer = require("nodemailer");

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dale.mante@ethereal.email',
        pass: '23hmEBheZr5PcJwJDq'
    }
};

module.exports = nodemailer.createTransport(mailConfig);
