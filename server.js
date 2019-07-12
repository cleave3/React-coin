const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.port || 8080;

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});