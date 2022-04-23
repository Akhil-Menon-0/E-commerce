import React, {createContext } from "react"

const CounterContext=createContext()

class CounterProvider extends React.Component{
    state={
        cart:[]
    }
        render(){
            return(
                <CounterContext.Provider value={{
                    state:this.state,
                    AddToCart:(item)=>(this.setState((prevState)=>{
                        let tempCart=prevState.cart

                        tempCart.push(item.props)
                        console.log(tempCart)
                        return({
                            cart:tempCart
                        })
                    })),
                    RemoveItem:(no)=>(this.setState((prevState)=>{
                        let count=0
                        let tempCart=[]
                        for(let i=0;i<prevState.cart.length;i++)
                        {
                            let item=prevState.cart[i]
                            if(item.id!==no||count!==0){
                                tempCart.push(item)
                            }
                            else{
                                count++
                            }
                        }
                        return({
                            cart:tempCart
                        })
                    }))
                    }
                } >
                    {this.props.children}
                </CounterContext.Provider>
            )
        }
    
}
const CounterConsumer=CounterContext.Consumer
export {CounterConsumer,CounterProvider}