import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './StarRating.css'
class StarRating extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {rating:'',hover:''}
        this.setRating = this.setRating.bind(this);
        this.setHover= this.setHover.bind(this);
    }
    
    setRating(e){
        this.setState({ rating: e})
    }
    setHover(e){
        this.setState({hover:e})
    }
    render(){
        return (<div className="StarRating">
        {[...Array(10)].map((star,i)=>{
            const ratingValue=i+1
            return (
            <label>
                <input type="radio" 
                name="rating" 
                value={ratingValue}
                onClick={()=>{
                    this.setRating(ratingValue);
                    this.props.parentCallback(ratingValue);    
                }}
                />
                <FontAwesomeIcon className="icon" onMouseEnter={()=>this.setHover(ratingValue)}
                onMouseLeave={()=>this.setHover(null)} color={ratingValue <= (this.state.hover||this.state.rating) ? "#ffc107" : "#e4e5e9"} icon={faStar}/>
            </label>
            )
        })
         }
        </div>)
    }
    
}

export default StarRating