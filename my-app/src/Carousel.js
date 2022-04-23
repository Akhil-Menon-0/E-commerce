import React from "react"
import CItem from "./CItem"
class Carousel extends React.Component{
    render(){
        return(
            <div style={{marginTop:"10px",marginBottom:"10px"}} id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <CItem id="1" url="https://www.theapplepost.com/wp-content/uploads/2018/04/Apple-Palo-Alto-2.jpg"/>
                <CItem id="2" url="https://images.samsung.com/is/image/samsung/p5/au/faq/tv-av/smarthub/1.png?$ORIGIN_PNG$"/>
                <CItem id="3" url="https://pbs.twimg.com/media/CppofJbUsAQpBBr.jpg"/>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
            </div>
        )
    }
}
export default Carousel