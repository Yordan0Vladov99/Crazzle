import './ArticlePage.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';

class ArticlePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {article:{}}
    }
    componentDidMount(){
        fetch(`/api/articles/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(article => this.setState({article},() => console.log('article fetched...', article)));
    }
    render(){
        return (
    <div className="ArticlePage">
        <h1 className="title">{this.state.article.title}</h1>
        <div className="tags">
        <span>By:{this.state.article.author}</span>
        </div>
        
        <img src={`/api/articles/${this.state.article.id}/pictures`} className="cover-photo" alt=""/>
        <p className="description">{this.state.article.description}</p>
    </div>
  );
}
}

export default ArticlePage;