import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";


const Layout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet className="content" />
            <Footer />
        </React.Fragment>

    )
}
export default Layout;