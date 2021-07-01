import './ProductDiscussions.css';
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

class ProductDiscussions extends React.Component{
    constructor(props){
        super(props);
        this.state = {discussions:[]}
    }
    componentDidMount(){
        

        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/discussions`)
        .then(res=>res.json())
        .then(discussions => this.setState({discussions},() => console.log('discussions fetched...', discussions)));


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

        const ImageValidation = str => {
            if(str.dis_img!=null){
                return <img className="dis-img" src={`/api/discussions/pictures/${str.dis_id}`} alt=""></img>
            }
            else{
                return null
            }
        }
  
        var discussions=[];
        for(var i=0; i<this.state.discussions.length;i++){
            discussions.push(         
                <div className="Discussion">
                <div className="post-text">
                <div className="tags">
                    <span>Posted by {this.state.discussions[i].dis_author} on {this.state.discussions[i].dis_publication_date}</span>
                </div>
                <NavLink className="discussion-link" to={`/discussions/${this.state.discussions[i].dis_id}`}>
                <div className="dis-description">
                    <p>{this.state.discussions[i].dis_description} </p>
                    

                    {ImageValidation(this.state.discussions[i])}
                </div>
                </NavLink>
            </div>
            <div className="comments">
                <span>{this.state.discussions[i].dis_comments} </span>
                <span>Comments,</span>
                <span>{this.state.discussions[i].dis_upvotes-this.state.discussions[i].dis_downvotes}</span>
                <span>Upvotes</span>
            </div>
        </div>)
        }
        discussions.push(<div class="links">
            <NavLink to={`/${this.props.match.params.media}/${this.props.match.params.id}/discussion-form`} className="link">Discuss this title </NavLink>

        </div>)
        
        return (
    <div className="ProductPage ProductDiscussions">
       <h4 className="headers">Product Discussions</h4>
       {discussions}
    </div>
  );
}
}

export default ProductDiscussions;