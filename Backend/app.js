const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());

app.post("/post", (req, res) => {
    console.log(`Connected to backend braah!`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on: ${PORT}`));

