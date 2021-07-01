
import './BrowsingList.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';

class BrowsingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {products: []};
    }
    componentDidMount(){
        fetch(`/api/products/${this.props.media}/${this.props.filter}`)
        .then(res=>res.json())
        .then(products => this.setState({products},() => console.log('products fetched...', products)));
    }
    render(){
        let id='';
        let title='';
        let description='';
        let ratings_sum='';
        let ratings_votes='';
        switch(this.props.media){
            case 'tv_shows':id='tv_id';title='tv_title';description='tv_description';ratings_sum='tv_ratings_sum';ratings_votes='tv_ratings_votes';break;
            case 'films':id='film_id';title='film_title';description='film_description';ratings_sum='film_rating_sum';ratings_votes='film_rating_votes';break;
            case 'books':id='book_id';title='book_title';description='book_description';ratings_sum='book_ratings_sum';ratings_votes='book_ratings_votes';break;
            case 'video_games':id='vg_id';title='vg_title';description='vg_description';ratings_sum='vg_ratings_sum';ratings_votes='vg_ratings_votes';break;
            case 'albums':id='album_id';title='album_title';description='album_artist';ratings_sum='album_rating_sum';ratings_votes='album_rating_votes';break;
        }
        var list=[];
        if(this.props.media!='albums'){
            list=this.state.products.map( product => 
                <div className="Product">
    <div className="title-block">
        <NavLink className="title" to={`/products/${this.props.media}/${product[id]}`}>{product[title]}</NavLink>
        <div className="score">
        <FontAwesomeIcon className="icon checked" icon={faStar} />
        <div className="score-rating">
            <span className="score-num">{Math.round((product[ratings_sum]/product[ratings_votes] + Number.EPSILON) * 10) / 10}</span>
            <span className="votes-num">{product[ratings_votes]}</span>
        </div>
        <span>/10</span>
    </div>
    </div>
    
    <div className="description">
        <img src={`/api/products/${this.props.media}/${product[id]}/pictures`} className="poster" alt=""/>
        <div className="summary">
            <p>{product[description]}</p>
        </div>
    </div>
</div>)
}
        else{
            list=this.state.products.map( product => 
                <div className="Music-Product">
    <div className="title-block">
        <NavLink className="title" to={`/products/${this.props.media}/${product[id]}`}>{product[title]}</NavLink>
        <div className="score">
        <FontAwesomeIcon className="icon checked" icon={faStar} />
        <div className="score-rating">
            <span className="score-num">{Math.round((product[ratings_sum]/product[ratings_votes] + Number.EPSILON) * 10) / 10}</span>
            <span className="votes-num">{product[ratings_votes]}</span>
        </div>
        <span>/10</span>
    </div>
    </div>
    
    <div className="music-description">
        <img src={`/api/products/${this.props.media}/${product[id]}/pictures`} className="music-poster" alt=""/>
        <div className="summary">
            <p>{product[description]}</p>
        </div>
    </div>
</div>)
        }
        return (
    <div className="BrowsingList">
        <div className="Products">
        {list}
        </div>
  </div>
  );
}
}

export default BrowsingList;
