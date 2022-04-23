import React from 'react';
import Nav from "./Nav"
import Main from "./Main";
import Modal from "./Modal"
import ContactPage from "./ContactPage"
import {CounterProvider} from "./CounterContext"
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    
      <CounterProvider>
        <Switch>
      <Route path="/" exact strict render={()=>{
        return(
      <div>
     <Nav />
     <Modal />
     <Main />
    </div>
        )
      }}/>
      <Route path="/Contact/" exact strict render={(url)=>
      {
        return(
            <ContactPage />
        )
      }}/>
      <Route render={()=>{
        return(
          <h1>Errrroooorrrrrrrrrrrr!!!</h1>
        )
      }}/>
    </Switch>
    
      </CounterProvider>
    
    
  );
}

export default App;
