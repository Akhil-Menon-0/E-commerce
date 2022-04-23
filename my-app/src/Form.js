import React from "react"


class Form extends React.Component{
    state={
        searchText:""
    }
    handleChange=(event)=>{
        let val=event.target.value
        this.setState({
            searchText:val
        })
    }
    render(){
        return(
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search" onChange={this.handleChange} />
                    <button style={{color:"white",border:"1px solid blue"}} className="btn btn-outline-success my-2 my-sm-0" type="submit"  >Search</button>
                </form>
        </div>
                
        )
    }
}

export default Form