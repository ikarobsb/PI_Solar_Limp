import React from "react";
import logo from "././../../assets/logo.svg";
import "./Logo.css";

export default function Logo() {
    return (
        <div className="logo">
        <img src={logo} alt="logo"></img>
        </div>
    );
    }