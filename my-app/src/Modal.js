import React from "react"
import CartItem from "./CartItem"
import {CounterConsumer} from "./CounterContext"
class Modal extends React.Component{

    handleItems=(items)=>{
      const cartitems=items.map((item)=>{
        return <CartItem id={item.id} name={item.name} image={item.image} />})
        return cartitems
    }
    render(){
      
        return(
          <CounterConsumer>
            {
              (context)=>{
                return(
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              {context.state.cart.length>0&&
                                this.handleItems(context.state.cart)
                              }
                              {
                                context.state.cart.length===0&&
                                <h1>Why so empty ;)</h1>
                              }
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                )
              }
            }
          </CounterConsumer>
        )
            
    }
}

export default Modal