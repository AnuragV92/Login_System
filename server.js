const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());  // enable pre-flight

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json());

// app.use('/api', ApiRoutes);

app.get('/user/login', (req, res, next) => {
    console.log(req.query);
    const isValid = req.query.username && req.query.username.toLowerCase() === 'john doe' && req.query.password === 'password';
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (isValid) {
        const data = {
            currentTime: time,
            message: `Welcome ${req.query.username}`,
            path: __dirname
        }
        res.send(data);
    } else {
        res.status(400).send({
            message: 'Unknown User'
        })
    }
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
