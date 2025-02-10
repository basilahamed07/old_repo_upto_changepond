import React, { Component, Fragment } from 'react'

// import { Fragment } from 'react'
// import imagesss from "../shared/images/Alps-Switzerland.webp"
class Taggledimage extends Component {
    constructor(){
        super()
        
        this.state ={
            condiction:true,
            name:"car",
            imgs:"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds "
        } 
    }
     
    checking = ()=>{
          
        if(this.state.condiction){
            this.setState(({imgs:"https://static.vecteezy.com/system/resources/thumbnails/023/329/908/small_2x/futuristic-motorbike-on-a-vibrant-colorful-retrowave-landscape-with-a-grid-pattern-in-the-cyberspace-horizontal-version-generative-ai-photo.jpg"}))
            this.setState(({condiction:false}))
            this.setState(({name:"bike"}))
        }
        else{
            this.setState(({imgs:"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds"}))
            this.setState(({condiction:true}))
            this.setState(({name:"car"}))
        }
    }

    render(){
        return(
         <Fragment>
            <img src={this.state.imgs} width="700px" height="400px"/>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.checking()}>Change the image here</button>
        </Fragment>
        )
    }
}

export default Taggledimage
