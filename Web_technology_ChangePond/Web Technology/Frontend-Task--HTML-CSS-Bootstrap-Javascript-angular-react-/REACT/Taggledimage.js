import React, { Component, Fragment } from 'react'

// import { Fragment } from 'react'
// import imagesss from "../shared/images/Alps-Switzerland.webp"
class Taggledimage extends Component {
    constructor(){
        super()
        
        this.state ={
            condiction:true,
            name:"car",
            imgs:"https://wallpapers.com/images/hd/heavily-detailed-nissan-gt-r-4k-q3totukcp4n1nxkc.jpg "
        } 
    }
     
    checking = ()=>{
          
        if(this.state.condiction){
            this.setState(({imgs:"https://static.vecteezy.com/system/resources/thumbnails/023/329/908/small_2x/futuristic-motorbike-on-a-vibrant-colorful-retrowave-landscape-with-a-grid-pattern-in-the-cyberspace-horizontal-version-generative-ai-photo.jpg"}))
            this.setState(({condiction:false}))
            this.setState(({name:"bike"}))
        }
        else{
            this.setState(({imgs:"https://wallpapers.com/images/hd/heavily-detailed-nissan-gt-r-4k-q3totukcp4n1nxkc.jpg"}))
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
