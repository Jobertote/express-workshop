const express = require('express');
const app = express();
app.get("/", (rec, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("Server is running...");    
});