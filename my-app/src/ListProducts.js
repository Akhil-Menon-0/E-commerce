import React from "react"
import Card from "./Card"
import products from "./ProductsAPI"
class ListProducts extends React.Component{

    render(){
        const cards=products.map((product)=>{
            return <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <Card id={product.id} name={product.name} image={product.image} des={product.des} offer={product.offer} />
            </div>
        })
        return(
            <div className="container">
                <div className="row">
                     {cards}
                </div>
            </div>
        )
    }
}

export default ListProducts