const { response, request } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 3001
const bluebird = require('bluebird');

let connection; //Variable para almacenar la conexión a la DB

//Configura el servidor para recibir dtos en formato Json
app.use(express.json());

app.get("/get-product", (request, response)=>{
    response.send("Todo ok");
})
    
app.post("/add-product",async(request, response) => {
    await connection.execute("INSERT INTO products(name, price, stock, description, status) VALUES ('Piña', 1200, 150, 'variedad Oromiel con cogollo', 'Disponible')");
    const product = request.body;
    console.log(product.name)
    response.json(product)
})
app.put("/update-product", (request, response) => {
    const product = request.body;
    console.log(product.name)
    response.json(product)
})
app.delete("/delete-product", (request, response) => {
    const product = request.body;
    console.log(product.name)
    response.json(product)
})





app.listen(port, async () => {
     connection = await mysql.createConnection({
       host: "localhost",
       user: "root",
       port: 3306,
       password: "root",
        database: "tienda-grupo-23",
       Promise: bluebird
     });
    console.log("Server running on port: " + port);

});