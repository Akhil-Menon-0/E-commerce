import React from "react"
import Item from "./Item"
class SecNav extends React.Component{
    render(){
        return(
            <ul className="nav nav-tabs justify-content-center">
                <Item key="1" name="Electronics" />
                <Item key="2" name="Books" />
                <Item key="3" name="Men" />
                <Item key="4" name="Women" />
                <Item key="5" name="Sports" />
                <Item key="6" name="Home & Furniture"/>
            </ul>
        )
    }
}
export default SecNav