import React, { Component } from 'react'

const HocComp = (Wrappers) => {

    class Hots extends Component{
        
        constructor(props){
            super(props)
            
            this.state = {
                count:0
            }

        }
        counterincrease = ()=>{
            this.setState(({count:this.state.count+1}))
        }

        render(){
            return <Wrappers count={this.state.count} counterincrease={this.counterincrease}></Wrappers>
        }
    }
    return Hots
}

export default HocComp
