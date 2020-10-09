const nodemailer = require("nodemailer");

const mailConfig = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dale.mante@ethereal.email',
        pass: '23hmEBheZr5PcJwJDq'
    }
});

exports.module = nodemailer.createTransport(nodemailer);
