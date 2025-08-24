import React from "react";
import Logo from "../assets/logo.png";
import { RiMenuFill } from "@remixicon/react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbartop">
                <div>
                    <RiMenuFill size={30} className="menuIcon" />
                </div>
                <div>
                    <img src={Logo} alt="Mr.Chat" className="navLogo" />
                    <h1>Mr.Chat</h1>
                </div>
            </div>
        </div>
    );
};