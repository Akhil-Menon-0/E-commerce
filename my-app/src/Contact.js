import React from "react"
import {Link,Redirect} from "react-router-dom"
class Contact extends React.Component{
    state={
        redirect:false
    }
    render(){
        return(
            <React.Fragment>
                {/* {
                    this.state.redirect&&
                    <Redirect to="/Contact/" exact strict />
                } */}
                <Link to="/Contact/" exact strict>
                <button style={{marginLeft:"1em",marginRight:"1em"}}className="btn btn-primary" onClick={()=>{
                    this.setState({
                        redirect:true
                    })
                }} >
                    Contact Us
                </button>  
            </Link>
            </React.Fragment>
                             
        )
    }
}

export default Contact