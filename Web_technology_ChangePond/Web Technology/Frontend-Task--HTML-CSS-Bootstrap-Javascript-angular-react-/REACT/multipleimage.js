import React, { Component } from 'react'

class Multipleimage extends Component {

    constructor(){
        super()
        this.state = {
            image:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg",
            name:"car"
        }
    }
    image1= ()=>{
        this.setState({name:"car"})
        this.setState({image:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"})
    }
    image2= ()=>{
        this.setState({name:"bike"})
        this.setState({image:"https://t4.ftcdn.net/jpg/05/67/03/25/360_F_567032519_HWWeha72w4FlDHtpJCDOP82gCMjubrN0.jpg"})
    }
    image3= ()=>{  
        this.setState({name:"bote"})
        this.setState({image:"https://www.shutterstock.com/image-illustration/original-oil-painting-titanic-iceberg-260nw-1837038775.jpg    "})
    }
    image4= ()=>{
        this.setState({name:"yarch"})
        this.setState({image:"https://www.rivieratravel.co.uk/sites/default/files/assetbank/WORLD_VOYAGER_2020_04.jpg"})
    }
    image5= ()=>{
        this.setState({name:"ducati"})
        this.setState({image:"https://images.carandbike.com/bike-images/colors/ducati/supersport/ducati-supersport-ducati-red-std.png?v=1631181814"})
    }
    image6= ()=>{
        this.setState({name:"yamaha"})
        this.setState({image:"https://upload.wikimedia.org/wikipedia/commons/5/51/2015_Yamaha_YZF-R1_crop.JPG"})

    }



    render() {
        return (
            <div>
                <img src={this.state.image} width="900px" height="700px"/>
                <h1>{this.state.name}</h1>
                <button type="button" onClick={()=>this.image1()}>Car Image </button>
                <button type="button" onClick={()=>this.image2()}>Bike Image </button>
                <button type="button" onClick={()=>this.image3()}>Titan Image </button>
                <button type="button" onClick={()=>this.image4()}>Bote image </button>
                <button type="button" onClick={()=>this.image5()}>Ducati image </button>
                <button type="button" onClick={()=>this.image6()}>Yamaha image </button>
            </div>
        )
    }
}

export default Multipleimage
