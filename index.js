const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("My name is Vivek Bapuji Choudhary from D17A - 16");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server is Running...!!!");
});