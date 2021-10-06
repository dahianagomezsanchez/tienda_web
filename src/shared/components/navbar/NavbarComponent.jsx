import React from "react";
import { Link } from "react-router-dom";


/* import logo from "\src\assets\img\tazonFrutas.jpg";
 */
function NavbarComponent(props) {
  let title = props.title;
  let title1 = props.title1;

  return (
  
   
    
    <nav id="header" className="navbar navbar-light navbar-expand-lg navbar-dark bg-dark">
          
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
          <h5 >{title}-{ title1}</h5>
         
         {/*  <img
            src={logo} className= "navbar navbar-light navbar-expand-lg navbar-dark bg-dark" alt = "logo"  /> */}
                  
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar ms-auto mb-2 mb-lg-2">
            
            <li className="nav-item">
              <Link to="/home" className="nav-link text-login">Home</Link>
            </li>
            <li className="nav-item">
              <Link to = "/login" className="nav-link text-login" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to = "/users" className="nav-link">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/sales" className="nav-link active" aria-current="page">Sales</Link>
              </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link active" aria-current="page">Register</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
