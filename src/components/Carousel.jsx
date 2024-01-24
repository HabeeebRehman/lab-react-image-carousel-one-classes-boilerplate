import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
 constructor (){
    super()
    this.state = {
        currimageIndex:0,
    };
 }
 prev =()=>{
    if(this.state.currimageIndex > 0){
        this.setState({
            currimageIndex: this.state.currimageIndex - 1,
        });
    } else{
        this.setState({
            currimageIndex: images.length - 1,
        });
    }

 };

 next =()=>{
    if(this.state.currimageIndex < images.length - 1){
        this.setState({
            currimageIndex: this.state.currimageIndex + 1,
        });
    } else{
        this.setState({
            currimageIndex: 0,
        });
    }
 };

    render() {
        return (
            <>
                <div className="main-carousel">
                    <div className="Buttons">
                        <div className="left-btn" onClick={this.prev}><ArrowBackIosIcon /></div>
                        <div className="right-btn" onClick={this.next}><ArrowForwardIosIcon /></div>
                    </div>
        
                <div className="image-container">
                    <span className="text title">
                        {images[this.state.currimageIndex].title}
                    </span>
                    <img src={images[this.state.currimageIndex].img} alt={this.state.currimageIndex.title} />
                    <span className="text subtitle">
                        {images[this.state.currimageIndex].subtitle}
                    </span>
                </div>
            </div>
            </>

        )
    }

 } 


export default Carousel;