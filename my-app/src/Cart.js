import React from "react"
import {CounterConsumer} from "./CounterContext"
class Cart extends React.Component{
    
    render(){
        return(
            <CounterConsumer>
                {(context)=>{
                    return(
                        (
                            <div>
                                <button type="button" style={{color:"white",border:"1px solid blue"}} className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal" >
                            Your Cart<span style={{marginLeft:"4px"}} className="badge badge-light">{context.state.cart.length}</span>
                            </button>
                            </div>
                        )
                    )
                }
                }
                
            </CounterConsumer>
    )
    }
        
    
}

export default Cart