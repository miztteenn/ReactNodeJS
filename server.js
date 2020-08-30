const express = require('express');
const app = express();
var server = require('http').createServer(app);
var session = require('express-session');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'idiorcafe'
});
const bodyParser = require('body-parser')

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log("test");
    res.redirect('/');
});

app.post('/login/submit', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(user)
    connection.query("SELECT * from user where username = '" + user.username + "' and password = '" + user.password + "'", function (error, results, fields) {
        console.log(results)
        if (results.length > 0) {
            const test = JSON.parse(JSON.stringify(results[0]));
            console.log(test);
            //res.redirect("/Home");
            //res.setHeader('Content-Type', 'application/json');
            res.json(test);
            res.end();
        }
        else {
            res.json("No data");
        }
    });
});

const port = "8080";

app.listen(port);