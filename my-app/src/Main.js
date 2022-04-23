import React from "react"
import SecNav from "./SecNav"
import Carousel from "./Carousel"
import ListProducts from "./ListProducts"
class Main extends React.Component{

    render(){
        return (
            <div>
            <SecNav />
            <Carousel />
            <ListProducts />
            </div>
        )
    }
}

export default Main