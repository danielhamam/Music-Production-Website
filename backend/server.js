// Backend

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors  = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.use(express.static('build')); // requesting static file index.html, return to client.


app.post('/api/forma', (req, res) => {
    console.log("here")
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        // port : 465,
        auth: {
            user : 'hamamwebsite@gmail.com',
            pass: 'hamamproduction2314'
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

app.listen(PORT, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    }
    else {
        console.log(`Server starting on port ${PORT}`);
    }
})