import './ProductPage.css';
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

class ProductPage extends React.Component{
    constructor(props){
        super(props);
        this.callbackFunction = this.callbackFunction.bind(this);
        this.state = {product: {},creators:[],actors:[],reviews:[],discussions:[],rating:0}
    }

  
    componentDidMount(){
        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(product => this.setState({product},() => console.log('product fetched...', product)));

        if( this.props.match.params.media==='films' || this.props.match.params.media==='tv_shows' ){
        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/cast/actors`)
        .then(res=>res.json())
        .then(actors => this.setState({actors},() => console.log('actors fetched...', actors)));
        }
        else if( this.props.match.params.media==='albums' ){
            fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/tracklist`)
        .then(res=>res.json())
        .then(actors => this.setState({actors},() => console.log('actors fetched...', actors)));
        }
        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/cast/others`)
        .then(res=>res.json())
        .then(creators => this.setState({creators},() => console.log('creators fetched...', creators)));

        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/reviews`)
        .then(res=>res.json())
        .then(reviews => this.setState({reviews},() => console.log('reviews fetched...', reviews)));

        fetch(`/api/products/${this.props.match.params.media}/${this.props.match.params.id}/discussions`)
        .then(res=>res.json())
        .then(discussions => this.setState({discussions},() => console.log('discussions fetched...', discussions)));


    }

    callbackFunction = (childData) => {
        this.setState({rating: childData});
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

        var creators=[]
        this.state.creators.forEach( element => {
            if(element.project_description===creator){
                creators.push(element.wp_name);
            }
        }
        )
        var product=''
        if(this.props.match.params.media==='albums'){
            product=<div className="Music-Product">
            <div className="title-block">
                <span className="title">{this.state.product[title]}</span>
                <div className="score-holder">
                <div className="score">
                <FontAwesomeIcon className="icon checked" icon={faStar} />
                <div className="score-rating">
                
                    <span className="score-num">{Math.round((this.state.product[ratings_sum]/this.state.product[ratings_votes] + Number.EPSILON) * 10) / 10}</span>
                    <span className="votes-num">{this.state.product[ratings_votes]}</span>
               </div>
                <span>/10</span>
                </div>
                
                <label class="rating">
                <span>| Rate This</span>
                <div className="star-rating"> <StarRating parentCallback = {this.callbackFunction}/></div>
                </label>
            </div>
            </div>
            <div className="music-description">
                <img src={`/api/products/${this.props.match.params.media}/${this.state.product[id]}/pictures`} className="music-poster" alt=""/>
                <div className="summary">
                    <p>{this.state.product[description]}</p>
                </div>
            </div>
            </div>
        }else{
            product=<div className="Product">
            <div className="title-block">
                <span className="title">{this.state.product[title]}</span>
                <div className="score-holder">
                <div className="score">
                <FontAwesomeIcon className="icon checked" icon={faStar} />
                <div className="score-rating">
                    <span className="score-num">{Math.round((this.state.product[ratings_sum]/this.state.product[ratings_votes] + Number.EPSILON) * 10) / 10}</span>
                    <span className="votes-num">{this.state.product[ratings_votes]}</span>
                </div>
                <span>/10</span>
                
                </div>
                <label class="rating">
                <span>| Rate This</span>
                <div className="star-rating"> <StarRating id={this.props.match.params.id} media={this.props.match.params.media} parentCallback = {this.callbackFunction} user={localStorage.getItem('user')}/></div>
                </label>

            </div>
            
            </div>
            
            <div className="description">
                <img src={`/api/products/${this.props.match.params.media}/${this.state.product[id]}/pictures`} className="poster" alt=""/>
                <div className="summary">
                    <p>{this.state.product[description]}</p>
                    <span className="credit-tags">{creator_msg} {creators.join()}</span>
                </div>
            </div>
            </div>
        }



        const ImageValidation = str => {
            if(str.dis_img!=null){
                return <img className="dis-img" src={`/api/discussions/pictures/${str.dis_id}`} alt=""></img>
            }
            else{
                return null
            }
        }
        var cast=[]
        if(this.props.match.params.media==='albums'){
            cast.push(<h4 className="headers">Tracks</h4>)
            for (let i = 0; i < this.state.actors.length; i++) {
                var track=this.state.actors[i].split(',');
                let title="";
                for (let j = 0; j < track.length-1; j++) {
                    title=title.concat(track[j]);
                    if(j!=track.length-2){
                        title=title.concat(',');
                    }
                    
                }
                var runtime=track[track.length-1];
                cast.push(<div className="track">
                <div className="actor">
                <span> {title} </span>
                </div>
                <div className="character">
                        <span> {runtime}</span>
                    </div>
            </div>);
            }
            
        }
        else if(this.props.match.params.media==='films'){
            cast.push(<h4 className="headers">Cast</h4>)
            for(var i=0;i<this.state.actors.length;i++){
                cast.push(<div className="cast-member">
                    <div className="actor">
                    <img className="actor-img" src={`/api/working_persons/${this.state.actors[i].wp_id}/pictures`} alt=""/>
                    <span> {this.state.actors[i].wp_name} </span>
                    </div>
                    <div className="character">
                        <span> {this.state.actors[i].role_name}</span>
                    </div>
                </div>)
            }
        }
        else if(this.props.match.params.media==='tv_shows'){
            cast.push(<h4 className="headers">Cast</h4>)
            for(var i=0;i<this.state.actors.length;i++){
                cast.push(
                <div className="cast-member">
                    <div className="actor">
                    <img className="actor-img" src={`/api/working_persons/${this.state.actors[i].wp_id}/pictures`} alt=""/>
                    <span> {this.state.actors[i].wp_name} </span>
                    </div>
                    <div className="character">
                        <span> {this.state.actors[i].role_name}</span>
                        
                    </div>
                    <span> {this.state.actors[i].contract_length} episodes</span>
                </div>)
            }
        }
        


        var reviews=[];
        for(var i=0; i<this.state.reviews.length && i<3; i++){
            reviews.push(         
        <div class="Review">
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
            <span class="break">|</span>
            <NavLink to={`/${this.props.match.params.media}/${this.props.match.params.id}/reviews`} className="link"> See all reviews...</NavLink>
        </div>)
        
        var discussions=[];
        for(var i=0; i<this.state.discussions.length && i<3;i++){
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
            <span class="break">|</span>
            <NavLink to={`/${this.props.match.params.media}/${this.props.match.params.id}/discussions`} className="link"> See all discussions...</NavLink>
        </div>)
        return (
    <div className="ProductPage">
        { product}
        {cast}
            
       
       <h4 className="headers">User Reviews</h4>
       {reviews}
       <h4 className="headers">Related Disussions</h4>
       <div className="Discussions">
       {discussions}
       </div>
       
       <h4 className="headers">Related Articles</h4>
       <h4 className="headers">Related Lists</h4>
    </div>
  );
}
}

export default ProductPage;