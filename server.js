// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

app.get('/api', (req, res) => {
    // res.send(projectData)
    res.status(200).send('Hello World')
})

app.post('/api', (req, res) => {
    console.log(req.body)
    res.status(201).send(projectData)
})

// Setup Server
const port = 3000
const server = app.listen(port, () => {
    console.log(`the server is running on http://localhost:${port}`);
})
