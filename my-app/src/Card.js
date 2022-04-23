import React from "react"
import {CounterConsumer} from "./CounterContext"
class Card extends React.Component{
    state={
        isAlert:false
    }
    handleClick=(event)=>{
        this.setState({
            isAlert:true
        })
    }
    handleClose=(event)=>{
        this.setState({
            isAlert:false
        })
    }
    render(){
        let offer=""
    if(this.props.offer!=="none"){
        offer+=this.props.offer
    }
    else{
        offer+="No offers currently"
    }
        return(<CounterConsumer>
            {
                (context)=>(
                    
                    <div className="card" style={{width: "18rem",margin:"1em"}}>
             <img src={this.props.image} className="card-img-top" alt="..." height="300px"/>
             <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <h6>{offer}</h6>
             <p className="card-text">{this.props.des}</p>
             <button className="btn btn-primary" onClick={()=>{
                 this.handleClick()
                 context.AddToCart({
                     props:this.props
                 })
             }}>Add to Cart</button>
             {
                 this.state.isAlert&&
                 <div style={{marginTop:"1em"}} className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Added to the Cart</strong>
               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
                   <span aria-hidden="true">&times;</span>
               </button>
               </div>
             }
             
             </div>
            </div>
                )
            }

        </CounterConsumer>
            
        )
    
   
    }
    
}

export default Card