import React from "react"

function Item(props){
    return(
        <div>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">{props.name}</a>
             <div className="dropdown-menu">
             <a className="dropdown-item" href="/">Action</a>
             <a className="dropdown-item" href="/">Another action</a>
            <a className="dropdown-item" href="/">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Separated link</a>
             </div>
             </li>
     </div>
    )
}
export default Item