import React from "react"
import Nav from "./Nav"
import Modal from "./Modal"
import ContactPageContent from "./ContactPageContent"
class ContactPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Nav />
                <Modal />
                <ContactPageContent/>
            </React.Fragment>
        )
    }
}

export default ContactPage