import React, { Component } from "react";
// import natural from "../shared/image s/Alps-Switzerland.webp" 
// import swizerlandnatual from "../shared/images/istockphoto-1491097741-170667a (1).webp"
// import staticdata from "../shared/constance/constandtdata";


class MyImages extends Component{
constructor(){
    super()

    this.images = {
        name:"natural",
        images:"https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg"
    }


}

    render(){
        return <div> 

            <h1>hidden</h1>

        {/* <img src={natural} width="700px" height="500px"/><br/> */}
        {/* <img src={swizerlandnatual} width="700px" height="500px"/> */}
        <h1></h1>

    {/* / <img src={staticdata.onlinenatural}/> */}
        {/* <img src={staticdata.onlineimage}/> */}
        {/* <img src={staticdata.swizerlandnatual}/> */}
        {/* <audio src={staticdata.audio} controls/> */}
        {/* <h1>this was an images of {this.images.name}</h1>
        <img src={this.images.images}></img> */}
        </div>
    }
}

export default MyImages