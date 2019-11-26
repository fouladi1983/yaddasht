const nodemailer = require('nodemailer');

exports.mailer = (to,subject,html) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  let transporter = nodemailer.createTransport({
    host: 'webmail.yadasht.net',
    port: 465,
    auth: {
      user: 'info@yadasht.net',
      pass: '1@wagatsu'
    }
  });

  let mailOptions = {
    from: 'info@yadasht.net',
    to: to,
    subject: subject,
    html: html // html body
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
