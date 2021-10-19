import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import FootComponent from "../shared/components/footer/FootComponent";

function UsersPages() {
    const { user, isAuthenticated } = useAuth0();
    if (localStorage.getItem("state") === "Vendedor"  && isAuthenticated) {
        return (
            <Fragment>
           
                <h1 className="login-title">Users Page</h1>
            </Fragment>
        );
    }

    else {
        return <Redirect to="/home"></Redirect>
    }
}

export default UsersPages;