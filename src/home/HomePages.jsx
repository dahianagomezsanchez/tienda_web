import React, { useState, useEffect } from "react";
import "./homeStyles.css";
import FootComponent from "../shared/components/footer/FootComponent";
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from "../shared/components/forbiden/ForbidenComponent";


function HomePages() {
    const {user, isAuthenticated} = useAuth0();
    const [products, setProducts] = useState([]);
    const [validUser, setValidUser] = useState(false);
    /* const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((product) =>
        <tr>
            <th scope="row">product.id</th>
            <td>product.name</td>
            <td>product.price</td>
            <td>product.stock</td>
            <td>product.description</td>
            <td>product.status</td>
        </tr>

    ); */

    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-products");
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

    
    const validateUserRole = async () => {
        //const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`);

        const response = await fetch(`http://localhost:3001/get-user?email=cospina@hotmail.com`);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    }
    const granAcces = async () => {
        let userData;

        if (isAuthenticated) {            
            userData = await validateUserRole();
            console.log(userData);
        }
        else {
           /*  window.location.href ="https://dev-j-0qzk0v.us.auth0.com/u/login?state=hKFo2SBVd2Nob1dxWkZrakU5d1FZQlhwaU1UTmVUMUpFY0VkaaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEhLZUkzc0g4N0RubWpBZklaWENqa2xDMXVUUlBtQm5ko2NpZNkgY0N1a0ZzNWVtSUhrWVZsOGFZRk5DMm5WYUVMRnUwVzY" */
            setValidUser(false);
            return;
        }

        if (userData) {
            if (userData.role !== "Vendedor") {
                setValidUser(true);
                localStorage.setItem("state", userData.role);
                console.log(userData.role);
                await getProducts();
            }
                
            else {
                localStorage.setItem("state", userData.role);
                setValidUser(false);
                
                }
            }
        else {
            localStorage.setItem("state", userData.role);
                setValidUser(false);
            }
    }


    useEffect(() => {
        granAcces();
        //getProducts(); 
    }, [isAuthenticated, validUser]);
    
        return (

            <div className="container">
                {validUser ? <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                       {products}
                    </tbody>
                </table>: <ForbidenComponent/>}
            </div>



        )
    
}


export default HomePages;