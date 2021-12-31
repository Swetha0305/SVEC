import React, { Component } from 'react'
import '../states.css'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Swetha",
             count:0
        }
    }
    
    render() {
        setTimeout(()=>{
        this.setState({
            name:"swetha"
            
        })
    },2000)
        return (
            <div className='demo'>
                <h1>Welcome {this.state.name}</h1>
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment button</button>
                <br></br>
                    <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>Decrement button</button>
                <br></br>
                    <button onClick={()=>{
                    this.setState({
                        count:0
                    })
                }}>Reset button</button>
            </div>
        )
    }
}
