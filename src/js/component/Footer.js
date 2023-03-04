import React from "react";
// import { useEffect, useState } from "react"
import PlayButton from "./PlayButton.jsx";

const Footer = () => {
    return (
        <>
            <div className="text-white bg-dark p-5 text-center mt-5" id="ftr">
                <PlayButton />
                <PlayButton />
                
                <button className="btn btn-secondary">Rewinds</button>
                <button className="btn btn-secondary">Play</button>
                <button className="btn btn-secondary">Forward</button>
            </div>
        </>
    )
}

export default Footer;