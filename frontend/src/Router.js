import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";

const Router = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
            <hr/>

            <Route exact path="/" component={App}/>
            <Route path="/Home" component={App}/>
            <Route path="/Blog" component={Blog}/>
        </div>
    </BrowserRouter>
);

export default Router
