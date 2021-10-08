import React, { Fragment } from "react";
import FootComponent from "../shared/components/footer/FootComponent";
import './salesStyles.css'

let lista_productos=[]
          lista_productos.push("Un computador una chimba")
          lista_productos.push("Una impresora que imprime")
          lista_productos.push("Un raton que se deja tocar")
          lista_productos.push("Auriculares que no se dañan")
          lista_productos.push("Un mando pa la pereza")

let lista_precio_unitario=[5,10,2,4,7]

let lista_disponibles=[500,600,3000,200,100]

let contador=[]

let i=0

let indice=0

let lista_cantidad=[]

let lista_articulos=[]

let lista_precio_total=[]

let costoTotal=0

let vIdVenta=10001

let listaVendedores=[]
listaVendedores.push("Dahiana Gomez")
listaVendedores.push("Jan Alvaro")
listaVendedores.push("Danna Garcia")
listaVendedores.push("JCarlo")
listaVendedores.push("German")

let lista_id_vendedores=[]
lista_id_vendedores.push(98765432)
lista_id_vendedores.push(10237654)
lista_id_vendedores.push(12354365)
lista_id_vendedores.push(67894931)
lista_id_vendedores.push(21324377)



for(i=0;i<lista_productos.length;i++)
{contador.push(0)}

function SalesPages() 
{
  const [precio,setPrecio]=useState(0);
  const [disponible,setDisponible]=useState(0);
  const [producto,setProducto]=useState("Seleccione un producto referente a la venta realizada")

  const [cantidad,setCantidad]=useState("")

  const[listaTotalCantiad,setListaTotalCantidad]=useState()

  const[listaTotalArticulos,setListaTotalArticulos]=useState()

  const[listaPrecioTotal,setListaPrecioTotal]=useState()

  const[CostoTotal,setCostoTotal]=useState()

  const[idVenta,setIdVenta]=useState()

  const[mirarIdVendedor,setMirarIdVendedor]=useState()

  const[nombreCliente,setNombreCliente]=useState("")

  const[idCliente,setIdCliente]=useState("")

  const[fecha,setFecha]=useState()

  const[vendedor,setVendedor]=useState("Nombre")

  const adding=(clicked)=>
  {
    indice=parseInt(clicked)  
    if (contador[clicked]==0)
      {
        setProducto(lista_productos[clicked])
        setDisponible(lista_disponibles[clicked])
        setPrecio(lista_precio_unitario[clicked])
        document.getElementById("boton_pedido").removeAttribute("disabled",false)
        document.getElementById("texto").removeAttribute("disabled",false)

        for (i=0;i<lista_productos.length;i++)
          {
            contador[i]=0;
          }

          contador[clicked]=1
      }
      else
      {
        setProducto("Seleccione un producto referente a la venta realizada")
        setDisponible(0)
        setPrecio(0)
        document.getElementById("boton_pedido").setAttribute("disabled",true)
        document.getElementById("texto").setAttribute("disabled",true)
        contador[clicked]=0
        
      }
  }

  const agregarAlPedido=()=>
  {
    if(parseInt(cantidad)>0 && lista_disponibles[indice]-parseInt(cantidad)>=0)
    {
      /////////////////
      let aux=-1;
      if (lista_articulos.length>0)
      {
        for(i=0;i<lista_articulos.length;i++)
        {
          if(lista_articulos[i]==lista_productos[indice])
          {
            aux=i
          }
        }
        if (aux==-1)
        {
          lista_cantidad.push(parseInt(cantidad))
          lista_articulos.push(lista_productos[indice])
          lista_precio_total.push(lista_precio_unitario[indice]*parseInt(cantidad))
        }
        if(aux>=0)
        {
          lista_cantidad[aux]+=parseInt(cantidad)
          lista_precio_total[aux]+=lista_precio_unitario[indice]*parseInt(cantidad)
        }
      }
      else
      {
        
      lista_cantidad.push(parseInt(cantidad))
      lista_articulos.push(lista_productos[indice])
      lista_precio_total.push(lista_precio_unitario[indice]*parseInt(cantidad))

      }
      

///////////////////////

      // lista_cantidad.push(parseInt(cantidad))
      // lista_articulos.push(lista_productos[indice])
      // lista_precio_total.push(lista_precio_unitario[indice]*parseInt(cantidad))

      setListaTotalCantidad(lista_cantidad.map((j)=><li className="style-list" key={Math.random()+"1a"}>{j}</li>))

      setListaTotalArticulos(lista_articulos.map((j)=><li className="style-list" key={Math.random()}>{j}</li>))

      setListaPrecioTotal(lista_precio_total.map((j)=><li className="style-list" key={Math.random()+"3"}>{j} $</li>))

      lista_disponibles[indice]-=parseInt(cantidad)

      setDisponible(disponible-parseInt(cantidad))

      costoTotal+=lista_precio_unitario[indice]*parseInt(cantidad)

      setCostoTotal(costoTotal)

      setIdVenta(vIdVenta)

      document.getElementById("boton_pedido").setAttribute("disabled",true)
      document.getElementById("texto").setAttribute("disabled",true)
      setProducto("Seleccione un producto referente a la venta realizada")
      setDisponible(0)
      setPrecio(0)
      contador[indice]=0
    }
  }

  const bVenta=()=>
  {
    if (lista_cantidad.length>0)
    {
      let gVendedor=listaVendedores[lista_id_vendedores.indexOf(mirarIdVendedor)]
      let gIdVendedor=mirarIdVendedor
      let gNombreCliente=nombreCliente
      let gIdCliente=idCliente
      let gFecha=fecha
      let gIdVenta=vIdVenta
      let gCantidadVenta=lista_cantidad
      let gCantidadArticulos=lista_articulos
      let gPrecioTotal=lista_precio_total
      let gDisponible=lista_disponibles
      let gCostoTotal=costoTotal

      console.log(gVendedor)
      console.log(gIdVendedor)
      console.log(gNombreCliente)
      console.log(gIdCliente)
      console.log(gFecha)
      console.log(gIdVenta)
      console.log(gCantidadVenta)
      console.log(gCantidadArticulos)
      console.log(gPrecioTotal)
      console.log(gDisponible)
      console.log(gCostoTotal)

      setMirarIdVendedor(" ")

      const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );}
      handleReset()

  
      setIdVenta()
      setListaTotalCantidad()
      setListaTotalArticulos()
      setListaPrecioTotal()
      lista_cantidad=[]
      lista_articulos=[]
      lista_precio_total=[]
      costoTotal=0
      setCostoTotal()
      setVendedor("Nombre")

      vIdVenta+=1

      
    }
    

  }
    
  return(
      <div className="color-ventana">
        <center>
        <h1>Registro de Ventas</h1>
        </center>

        <br/>
        <br/>

        <div className="container">
            <div className="row">
              <div className="col-3">
                  <div className="container">
                      <div className="row">
                          <div className="col-4">
                            <label>Vendedor:</label>
                          </div>
                          <div className="col-8">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle style-dropdownMenuButton1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  {vendedor}
                                </button>
                                <ul id="drop_vendedores" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                {listaVendedores.map((k)=><li key={k+"4"}><button id={`${listaVendedores.indexOf(k)}`} onClick={()=>{setMirarIdVendedor(lista_id_vendedores[listaVendedores.indexOf(k)]);setVendedor(k)}} className="dropdown-item" type="button">{k}</button></li>)}


                                </ul>
                            </div>
                          </div>
                      </div>

                      <br/>
                      <br/>

                      <div className="row">

                          <div className="col-6">
                            <label>ID Vendedor:</label>
                          </div>

                          <div className="col-6">
                            <label className="style-label-id_vendedor" id="id_vendedor" >{mirarIdVendedor}</label>
                          </div>

                      </div>

                      <br/>
                      <br/>

                        <div className="row">
                          <label>Nombre Cliente:</label>
                        </div>
                        <div className="row">
                          <input className="style-input-nombre_cliente" type="text" id="nombre_cliente" onChange={(cc)=>setNombreCliente(cc.target.value)}/>
                        </div>

                      <br/>

                      <div className="row">
                        <div className="col-5">
                          <label>ID Cliente:</label>
                        </div>
                        <div className="col-7">
                          <input className="style-input-id_cliente" type="text" id="id_cliente" onChange={(iid)=>setIdCliente(iid.target.value)}/>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div className="row">

                        <div className="col-12">

                            <label>Fecha de Venta:</label>
                            <br/>
                            <input className="style-input-start" type="date" id="start" name="date-start"
                            min="2021-01-01" max="2035-12-31" onChange={(f)=>setFecha(f.target.value)}/>

                          </div>

                    </div>



                  </div>
                  


              </div>

              <div className="col-9">
                <div>

                    <div className="dropdown style-dropdown">
                        <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Seleccione un producto
                        </button>
                        <ul id="lista_productos" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {lista_productos.map((i)=><li key={lista_productos.indexOf(i)}><button id={`${lista_productos.indexOf(i)}`} onClick={()=>adding(lista_productos.indexOf(i))} className="dropdown-item" type="button">{i}</button></li>)}
                          
                        </ul>
                    </div>
        
                      <br/>
                      <br/>
        
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <h4>Producto</h4>
                                <li id="idEquipo" className="lh-1 style-list">{producto}</li>
                          </div>
                          <div className="col">
                            <h4>Libras Disponibles</h4>
                                <li className="style-list" id="disponible"> {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}  {disponible} </li>
                          </div>
                          <div className="col">
                            <h4>Valor Por Libra($)</h4>
                                <li className="style-list" id="valor"> {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {precio} $</li>
                          </div>
            
                          <div className="col">
            
                            <h4>Cantidad Libras</h4>
                            <li className="style-list style-texto" ><input  type="number" pattern="\d+" id="texto" disabled onChange={(c)=>setCantidad(c.target.value)}/></li>
            
                          </div>
                        </div>
                      </div>
        
                      
        
                      <br/>
                      <br/>
        
                      <div className="style-div-boton-pedido">
                        <button id="boton_pedido" onClick={agregarAlPedido} type="button" className="btn btn-primary">Añadir al Pedido</button>
                      </div>
        
        
                </div>
              </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="container style-div-ventaTotal">

          <h3>Venta Total</h3>
          <label > ID Venta:  </label>
          <label id="id-venta">{'\u00A0'} {idVenta}</label>

          <br/>
          <br/>
          <br/>

          <div className="row">

            <div className="col">

              <b>Cantidad</b>

              <ul id="Cantidad_Venta">

              {listaTotalCantiad}
              
              </ul>

            </div>

            <div className="col style-div-articulos">
              <b> {'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Articulos</b>

              <ul id="Cantidad_Articulos">
                {listaTotalArticulos}
              </ul>

            </div>

            <div className="col style-div-precioTotal">
              <b>Precio Total ($)</b>

              <ul id="Cantidad_Precio_Total">
              {listaPrecioTotal}
              </ul>
              

            </div>

          </div>

          <br/>
          <br/>

          <div className="row style-div-costoTotal">
            <div className="col-5">
              <b>Costo Total: </b>
            </div>
            <div className="col-7 style-label-costoTotal">
              <label id ="Costo_Total">{CostoTotal}</label>
            </div>
          </div>

          <br/>
          <br/>

          <div className="style-div-button-guardarVenta">
            <button type="button" id="guardar_venta" className="btn btn-success" onClick={bVenta}>Guardar Venta</button>
          </div>

          
        </div>

        <br/>  
        <br/>  
        <br/>

      </div>
    )
}
export default SalesPages;