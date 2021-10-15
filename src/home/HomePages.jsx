import React, { useState, useEffect } from "react";
import "./homeStyles.css";
import FootComponent from "../shared/components/footer/FootComponent";
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from "../shared/components/forbiden/ForbidenComponent";


function HomePages() {
    const { user, isAuthenticated } = useAuth0();
    const [products, setProducts] = useState([]);
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
        const response = await fetch(`http://localhost:3001/get-user?email='${user.email}'`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    const granAcces = async () => {
        let userData;
        if (isAuthenticated) {            
            userData = await validateUserRole();
        }
        else {
            return false;
        }

        if (userData) {
            if (userData.role != "Invitado") {
                return true;
                }
            else {
                return false;
                }
            }
            else {
                return false
            }
    }


    useEffect(() => {
        getProducts();
    }, []);
    if (granAcces()) {
        return (

            <div className="container">
                <table class="table">
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
                </table>
            </div>



        );
    }
    else {
        return <ForbidenComponent/>
    }
}


export default HomePages;