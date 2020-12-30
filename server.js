// Backend

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors  = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.get('/', () => {
    resizeBy.send('welcome to my forma');
});

app.post('/api/forma', (req, res) => {
    console.log("here")
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        // port : 465,
        auth: {
            user : 'prodbyhamam@gmail.com',
            pass: 'hamam2314'
        }
    });
    let mailOptions = {
        from: data.email,
        to: 'prodbyhamam@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
        <p> You've received a new message! </p>

        <h3> Contact Information: </h3>
            <ul>
            <li> Name: ${data.name} </li>
            <li> Email: ${data.email} </li>
            <li> Subject: ${data.subject} </li>
            </ul>
        <h3> New Message: </h3>
        <p> ${data.message} </p>
        `
    }
    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
            res.send(error);
        }
        else {
            console.log("Success")
            res.send('Success');
        }
    })

    smtpTransport.close();

});


const PORT = process.env.PORT ||3001;
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})

// const exphbs = require('express-handlebars');
// const app = express();

// const express = require('express')
// const log = console.log;
// const path = require('path');
// const PORT = 8080;
// app.listen(PORT, () => log('Server is starting on PORT, ', 8080));