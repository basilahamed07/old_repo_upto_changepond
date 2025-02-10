// import { count } from 'console'
import React, { Component } from 'react'
import HocComp from '../component/HocComp'
import { Button } from '@mui/material'

class ClickCounterComp extends Component {
//     constructor(){
//         super()
//         this.state= {
//             count:0
//         }
// }

//  increase = ()=>{
//     this.setState(({count:this.state.count+1}))
//  }

    render() {
        return (
            <div>
                <h1 className='display-1 text-danger'>The count value was {this.props.count} </h1> <br/> <br/> v
                {/* <button className='btn btn-primary' type='button' onClick={()=>this.props.counterincrease()}>Click here to increase the value</button><br/> <br/> <br/> <br/> */}
                {/* <Button variant='contained' onClick={()=>this.props.counterincrease()}>Click here to increase the number</Button> */}
                <Button></Button>
            </div>
        )
    }
}

export default HocComp(ClickCounterComp)
