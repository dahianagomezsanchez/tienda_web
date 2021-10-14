import React, { Fragment } from "react";
/* import fondoInicioSesion from "*.module.sass" */


function RegisterPage() {

 /*  const [products, setProducts] = useState([]);
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((product) =>
    <tr>
      <th scope="row">product.id</th>
      <td>product.name</td>
      <td>product.price</td>
      <td>product.stock</td>
      <td>product.description</td>
      <td>product.status</td>
    </tr>

  );
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001//add-product");
      const jsonResponse = await response.json();
      const responseProducts = jsonResponse.data;
      const listProducts = responseProducts.map((product) =>
        <tr>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>{product.description}</td>
          <td>{product.status}</td>
        </tr>
      );
      setProducts(listProducts)
      console.log(jsonResponse.data);
    }
    catch (error) {

      console.log(error)
    }

  }
  useEffect(() => {
    getProducts();
  }, []);
 */


  return (
    <Fragment>
      <center>
        <div>
         
        </div>
        <div> <center>
          <br />
          <h1>Registro de Productos</h1>  </center>

          <div className="text-center text-primary mt-1 text-light"></div>

          <form action="" enctype="multipart/form-data">
            <div className="row row-col-12 col-6 form -group p-5">
              <div className="col-12 col- 6 sm">
                <label className="d-block my-2 text-light" for="">Identificador Único</label>
                <input required className="form-control" type="text" placeholder="Id" />
              </div>

              <div className="col-12">
                <label className="d-block my-2 text-light" for="">Descripción del producto</label>
                <input required className="form-control" type="text" placeholder="Descripción del producto" />
              </div>

              <div className="col-12">
                <label className="d-block my-2 text-light" for="">Valor Unitario</label>
                <input required className="form-control" type="number" placeholder="Valor Unitario" />
              </div>

              <div className="col-12">
                <label className="d-block my-2 text-light" for="">Estado del producto</label>
                <select required name="Estado producto" id="" className="form-control">
                  <option value="" selected>Seleccione</option>
                  <option value="1">Disponible</option>
                  <option value="2">No disponible</option>
                </select>
              </div>

              <div className="d-flex justify-content-center">
                <input type="submit" className="btn btn-light mt-5 col-3" onclick="return validacion(this.form)" value="Registrar" />
              </div>
            </div>
          </form>
        </div>


      </center>



    </Fragment>
  );
}

export default RegisterPage;
