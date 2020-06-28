import React from "react"
import ReactDOM from 'react-dom';
import './App.css';

function Header (){
    return(
        <header className="header">
        <img
             src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
             alt="problem ?" 
             width="150px"
        />
        <p> Meme Generator</p>
        </header>
    )
}

export default Header;