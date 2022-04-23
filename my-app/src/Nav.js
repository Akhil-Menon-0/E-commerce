import React from "react"
import Logo from "./Logo"
import Contact from "./Contact"
import Cart from "./Cart"
import Log from "./Log"
import Form from "./Form"
class Nav extends React.Component{

    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <Logo />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Form />
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Log />
            <Contact />
            <Cart /> 
            </div>
            </div>
                       
            </nav>
        )
    }
}

export default Nav