const { response, request } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2/promise");
const port = 3001;
const bluebird = require("bluebird");

let connection; //Variable para almacenar la conexión a la DB

//Configura el servidor para recibir dtos en formato Json
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/get-products", async(request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");

    console.log({
        data: rows
    });
    console.log(fields.length);

    response.json({ data: rows });
})

/* app.get("/get-product/:id"), async (request, response) => {
    await connection.execute("SELECT*FROM products WHERE id= ?", [request.params.id]);
    console.log()
    response.send("el ID de empleado");

} */

app.post("/add-product", async(request, response) => {
    const product = request.body;
    const name = product.name;
    const price = product.price;
    const stock = product.stock;
    const description = product.description;
    const status = product.status;


    await connection.execute(`INSERT INTO products(name, price, stock, description, status) VALUES ('${name}', ${price}, ${stock},'${description}', '${status}')`);

    console.log(product);
    response.json(product);

    /*   /* /* Se convierten en variable   de una función utilizando la destructuración*/
})

app.put("/update-product/:id", async(request, response) => {


    let {
        id
    } = request.params;

    const product = request.body;

    const name = product.name;
    const price = product.price;
    const stock = product.stock;
    const description = product.description;
    const status = product.status;

    await connection.execute(`UPDATE products SET name='${name}', price='${price}', stock='${stock}', description='${description}', status='${status}' WHERE id='${id}'`);

    console.log(product.name);
    response.json(product);
})





app.delete("/delete-product/:id", async(request, response) => {
    /*  let {
         id
     } = request.params; */

    const product = request.body;
    const id = product.id;
    /*   const name = product.name;
      const price = product.price;
      const stock = product.stock;
      const description = product.description;
      const status = product.status; */

    await connection.execute(`DELETE FROM  products WHERE id= '${id}'`);
    response.send("Producto eliminado");
    console.log(product.name);
    response.json(product);

})

app.listen(port, async() => {
    connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        /*  port: 3306, */
        password: "root",
        database: "tienda-grupo-23",
        Promise: bluebird
    });
    console.log("Server running on port: " + port);

});