import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './TopNews.css'

class TopNews extends Component{
    constructor(props){
        super(props);
        this.state = {articles: []};
    }
    componentDidMount(){
        fetch('/api/top_news')
        .then(res=>res.json())
        .then(articles => this.setState({articles},() => console.log('Articles fetched...', articles)));
    }
    render(){
        return(
            <div className="top_news_container">
            {this.state.articles.map(article => 
            <div className="top_news">
                <img src={`/api/top_news/pictures/${article.id}`} alt=""></img>
                <div className="news-description">
                <NavLink className="title" to={`/articles/${article.id}`}>{article.title}</NavLink>
                <li>By:{article.author}</li>
            </div>
            </div>)}
        </div>
        );
}
}
export default TopNews;