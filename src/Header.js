import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function Header(){
    
    return (
        <header className="container-fluid rounded">
            <h1 >My todo list</h1>
        </header>
    )
}export default Header;