
import './DiscussionsBrowsingList.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';

class DiscussionBrowsingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {products: []};
    }
    componentDidMount(){
        fetch(`/api/${this.props.media}/${this.props.filter}`)
        .then(res=>res.json())
        .then(products => this.setState({products},() => console.log('products fetched...', products)));
    }
    render(){
       
        var list=[];
        const ImageValidation = str => {
            if(str.dis_img!=null){
                return <img className="dis-img" src={`/api/discussions/pictures/${str.dis_id}`} alt=""></img>
            }
            else{
                return null
            }
        }
        switch(this.props.media){
            case 'discussions':
                list=this.state.products.map( product => 
                <div className="Discussion">
                <div className="post-text">
                <div className="tags">
                    <span>Posted by {product.dis_author} on {product.dis_publication_date}</span>
                </div>
                <NavLink className="discussion-link" to={`/discussions/${product.dis_id}`}>
                <div className="dis-description">
                    <p>{product.dis_description} </p>
                    {ImageValidation(product)}
                </div>
                </NavLink>
            </div>
            <div className="comments">
                <span>{product.dis_comments} </span>
                <span>Comments,</span>
                <span>{product.dis_upvotes-product.dis_downvotes}</span>
                <span>Upvotes</span>
            </div>
        </div>);break;
            case 'news':break;
            case 'announcements':list=this.state.products.map( product => 
                <div className="announcement">
            <img className="profile_photo" src={`/api/working_persons/${product.ann_author}/pictures`} alt=""/>
            <div className="annou_body">
                <div>
                    <div className="tags">
                        <span>By: </span>
                        <span className="author">{product.wp_name}</span>
                    </div>
                    <div className="description">
                        <p>{product.ann_description}</p>
                    </div>
                </div>
            </div>
        </div>);break;
        }
        return (
    <div className="DiscussionBrowsingList">
        <div className="Products">
        {list}
        </div>
  </div>
  );
}
}

export default DiscussionBrowsingList;
