import React from "react"
import {CounterConsumer} from "./CounterContext"
class CartItem extends React.Component {
    render() {
        let url=this.props.image
        return (
            <CounterConsumer>
                {(context)=>(
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={url} className="card-img" alt="..."/>
                    </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                    <h5 className="card-title">{this.props.name}</h5>
                                    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="col-md-1">
                            <button type="button" className="btn btn-danger" onClick={()=>{
                                context.RemoveItem(this.props.id)
                            }}>X</button>
                            </div>
                        </div>
                    </div>
                )}
            </CounterConsumer>
                )
            }
        }
        
export default CartItem