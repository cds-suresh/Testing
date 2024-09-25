var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sureshapp7994@gmail.com',
        pass: 'lbsd wfte ehrh qjqj'
    },
    type: 'smtp', // Add the type property
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
});

var mailOptions = {
    from: 'suresh,p1898@gmail.com',
    to: 'sureshapp7994+100@gmail.com,suresh.p1898@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy aadedd!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
