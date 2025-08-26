import React from "react";
import { BrowserRouter, Routers, Route, Link } from "react-router-dom";
import { RiHome2Fill } from "@remixicon/react";
import { RiCommunityFill } from "@remixicon/react";
import { RiContactsBook2Fill } from "@remixicon/react";
import "./IconContainer.css";

export default function IconContainer() {
    return (
        <div className="icon-container">
            <BrowserRouter>
                <div className="iconContainer">
                    <div>
                        <Link to='./chat'>
                            <RiHome2Fill size={25} className="menuIcon active" />
                        </Link>
                    </div>
                    <div>
                        <Link to='./group'>
                            <RiCommunityFill size={25} className="menuIcon" />
                        </Link>
                    </div>
                    <div>
                        <Link to='./add-friends'>
                            <RiContactsBook2Fill size={25} className="menuIcon" />
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};