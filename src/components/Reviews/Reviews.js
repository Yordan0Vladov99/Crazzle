import './Reviews.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';
import StarRating from '../StarRating/StarRating';


class Stars extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var stars=[];
        for(var i=0;i<10;i++){
            if(i<this.props.num){
                stars.push(<FontAwesomeIcon className="icon checked" icon={faStar} />)
            }
            else{
                stars.push(<FontAwesomeIcon className="icon" icon={faStar} />)
            }
        }
    return(
        <div className="review-rating">
            {stars}
        </div>
    )
    }
}

class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = {reviews:[]}
    }
    componentDidMount(){
        

        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/reviews`)
        .then(res=>res.json())
        .then(reviews => this.setState({reviews},() => console.log('reviews fetched...', reviews)));


    }
    render(){
        let id='';
        let title='';
        let description='';
        let ratings_sum='';
        let ratings_votes='';
        let creator='';
        let creator_msg='';
        
        switch(this.props.match.params.media){
            case 'tv_shows':id='tv_id';title='tv_title';description='tv_description';ratings_sum='tv_ratings_sum';ratings_votes='tv_ratings_votes';creator='creator';creator_msg='Created by:';break;
            case 'films':id='film_id';title='film_title';description='film_description';ratings_sum='film_rating_sum';ratings_votes='film_rating_votes';creator='director';creator_msg='Director:';break;
            case 'books':id='book_id';title='book_title';description='book_description';ratings_sum='book_ratings_sum';ratings_votes='book_ratings_votes';creator='author';creator_msg='Author:';break;
            case 'video_games':id='vg_id';title='vg_title';description='vg_description';ratings_sum='vg_ratings_sum';ratings_votes='vg_ratings_votes';creator='developer';creator_msg='Developers:';break;
            case 'albums':id='album_id';title='album_title';description='album_artist';ratings_sum='album_rating_sum';ratings_votes='album_rating_votes';creator='artist';creator_msg='Artist:';break;
        }

    
        
        



    
        


        var reviews=[];
        for(var i=0; i<this.state.reviews.length; i++){
            reviews.push(         
        <div class="ProductPage">
            <div class="review-title">
                <span>{this.state.reviews[i].review_title}</span>
               <Stars num={`${this.state.reviews[i].review_rating}`}/>
            </div>
            <div class="tags">
                <span>Posted by {this.state.reviews[i].review_author} </span>
            </div>
            <p class="review-des">
                {this.state.reviews[i].review_description}
            </p>
        </div>)
        }
            reviews.push(<div class="links">
            <NavLink to={`/${this.props.match.params.media}/${this.props.match.params.id}/review-form`} className="link">Review this title </NavLink>
        </div>)
        
        return (
    <div className="Reviews">
       <h4 className="headers">User Reviews</h4>
       {reviews}
    </div>
  );
}
}

export default Reviews;