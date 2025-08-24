import React from "react";
import { BrowserRouter, Routers, Route, Link } from "react-router-dom";
import { RiHome2Fill } from "@remixicon/react";

import "./IconContainer.css";

export default function IconContainer() {
    return (
        <div className="icon-container">
            <BrowserRouter>
                <div>
                    <Link to=''>
                        <RiHome2Fill size={30} className="menuIcon" />
                    </Link>
                </div>
                <div>
                    <Link to=''></Link>
                </div>
                <div>
                    <Link to=''></Link>
                </div>
            </BrowserRouter>
        </div>
    );
};