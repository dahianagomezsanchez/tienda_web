import React, { Fragment } from "react";
import FootComponent from "../shared/components/footer/FootComponent";
import './salesStyles.css'

function SalesPages() {
    return (
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
                            <label  for="Vendedor">Vendedor:</label>
                          </div>
                          <div className="col-8">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle style-dropdownMenuButton1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  Nombre
                                </button>
                                <ul id="drop_vendedores" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                </ul>
                            </div>
                          </div>
                      </div>

                      <br/>
                      <br/>

                      <div className="row">

                          <div className="col-6">
                            <label for="start">ID Vendedor:</label>
                          </div>

                          <div className="col-6">
                            <label className="style-label-id_vendedor" id="id_vendedor" for="start"></label>
                          </div>

                      </div>

                      <br/>
                      <br/>

                        <div className="row">
                          <label for="start">Nombre Cliente:</label>
                        </div>
                        <div className="row">
                          <input className="style-input-nombre_cliente" type="text" id="nombre_cliente"/>
                        </div>

                      <br/>

                      <div className="row">
                        <div className="col-5">
                          <label for="start">ID Cliente:</label>
                        </div>
                        <div className="col-7">
                          <input className="style-input-id_cliente" type="text" id="id_cliente"/>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div className="row">

                        <div className="col-12">

                            <label for="start">Fecha de Venta:</label>
                            <br/>
                            <input className="style-input-start" type="date" id="start" name="date-start"
                            value="2021-09-21"
                            min="2021-01-01" max="2035-12-31"/>

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
                          
                        </ul>
                    </div>
        
                      <br/>
                      <br/>
        
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <h4>Equipo</h4>
                                <li id="idEquipo" className="lh-1 style-list">Seleccione un producto referente a la venta realizada </li>
                          </div>
                          <div className="col">
                            <h4>Disponible</h4>
                                <li className="style-list" id="disponible"> {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} 0</li>
                          </div>
                          <div className="col">
                            <h4>Valor Unitario($)</h4>
                                <li className="style-list" id="valor"> {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} 0 $</li>
                          </div>
            
                          <div className="col">
            
                            <h4>Cantidad</h4>
                            <li className="style-list style-texto" ><input  type="number" pattern="\d+" id="texto" disabled/></li>
            
                          </div>
                        </div>
                      </div>
        
                      
        
                      <br/>
                      <br/>
        
                      <div className="style-div-boton-pedido">
                        <button id="boton_pedido" type="button" onclick="agregar_al_pedido();" className="btn btn-primary" disabled>Añadir al Pedido</button>
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
          <label for="id-venta"> ID Venta:  </label>
          <label id="id-venta"></label>

          <br/>
          <br/>
          <br/>

          <div className="row">

            <div className="col">
              <b>Cantidad</b>

              <ul id="Cantidad_Venta">
              </ul>

            </div>

            <div className="col style-div-articulos">
              <b> {'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Articulos</b>

              <ul id="Cantidad_Articulos">
              </ul>

            </div>

            <div className="col style-div-precioTotal">
              <b>Precio Total ($)</b>

              <ul id="Cantidad_Precio_Total">
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
              <label id ="Costo_Total" for="start"></label>
            </div>
          </div>

          <br/>
          <br/>

          <div className="style-div-button-guardarVenta">
            <button type="button" id="guardar_venta" onclick="g_venta()" className="btn btn-success" disabled>Guardar Venta</button>
          </div>

          
        </div>

        <br/>  
        <br/>  
        <br/>
        </div>
    );
}
export default SalesPages;