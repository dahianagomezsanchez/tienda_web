const { response, request } = require("express");
const express = require("express");
const app = express();
const port = 3001

app.use(express.json());

app.get("/get-product", (request, response)=>{
    response.send("Todo ok");
})
    
app.post("/add-product", (request, response) => {
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





app.listen(port, ()=> {
    console.log("Server running on port: " + port);

});