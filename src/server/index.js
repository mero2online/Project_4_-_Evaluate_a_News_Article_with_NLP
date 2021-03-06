var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// Personal API Key for MeaningCloud API
const apiKey = process.env.API_KEY;

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'))
});
const port = 8081;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`, `http://localhost:${port}/`);
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

const apiKeyData = {
  apiKey: apiKey,
};

app.get('/api', getApiKeyData);

function getApiKeyData(req, res) {
  res.send(apiKeyData);
}
