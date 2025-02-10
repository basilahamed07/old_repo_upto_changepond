import React, { Component } from 'react'
// import ClickCounterComp from './ClickCounterComp'
// import { count } from 'console'

import HocComp from '../component/HocComp'

class Hoveronme extends Component {
    

    render() {
        return (
            <div>
                <h1  className='display-1 text-warning'>the count value was {this.props.count}</h1>
                <h3 onMouseOver={()=>this.props.counterincrease()}>Hover on me </h3>
            </div>
        )
    }
}

export default HocComp(Hoveronme)
