import React from "react"
function CItem(props){
    let name="carousel-item"
    if(props.id==="1")
    {
        name+=" active"
    }
    return (
        <div className={name}>
        <img src={props.url} className="d-block w-100" alt="..." height="300px"/>
        </div>
    )
}
export default CItem