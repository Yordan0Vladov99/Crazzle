
import './Browser.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';
import BrowsingList from '../BrowsingList/BrowsingList';
class Browser extends React.Component{
    render(){
        let filter='';
        switch(this.props.match.params.filter){
                case 'most_popular': filter="Most Popular";break;
                case 'newest': filter="Latest";break;
                case 'best': filter="Best";break;
        }
        let media='';
        switch(this.props.match.params.media){
            case 'albums': media="Albums";break;
            case 'films': media="Films";break;
            case 'video_games': media="Video Games";break;
            case 'tv_shows': media="TV Shows";break;
            case 'books': media="Books";break;
    }
          return (
    <div className="Browser">
            <div className="filters">
            <div>
                <h1 className="headers">{filter} {media}</h1>
            </div>

            <div className="dropdown-filter-container">
                <button className="filter_button"><FontAwesomeIcon className="icon" icon={faBars} /> Filters</button>
                <div className="dropdown-filter-content">
                    <NavLink className="menu-item" to={`/products/browser/${this.props.match.params.media}/most_popular`}>Most Popular</NavLink>
                    <NavLink className="menu-item" to={`/products/browser/${this.props.match.params.media}/newest`}>Newest</NavLink>
                    <NavLink className="menu-item" to={`/products/browser/${this.props.match.params.media}/best`}>Best Rating</NavLink>
                </div>
            </div>
        </div> 
        <Route exact path='/products/browser/tv_shows/most_popular'>
        <BrowsingList media="tv_shows" filter="most_popular"/>
        </Route>
        <Route exact path='/products/browser/tv_shows/newest'>
        <BrowsingList media="tv_shows" filter="newest"/>
        </Route>
        <Route exact path='/products/browser/tv_shows/best'>
        <BrowsingList media="tv_shows" filter="best"/>
        </Route>

        <Route exact path='/products/browser/films/most_popular'>
        <BrowsingList media="films" filter="most_popular"/>
        </Route>
        <Route exact path='/products/browser/films/newest'>
        <BrowsingList media="films" filter="newest"/>
        </Route>
        <Route exact path='/products/browser/films/best'>
        <BrowsingList media="films" filter="best"/>
        </Route>

        <Route exact path='/products/browser/books/most_popular'>
        <BrowsingList media="books" filter="most_popular"/>
        </Route>
        <Route exact path='/products/browser/books/newest'>
        <BrowsingList media="books" filter="newest"/>
        </Route>
        <Route exact path='/products/browser/books/best'>
        <BrowsingList media="books" filter="best"/>
        </Route>

        <Route exact path='/products/browser/albums/most_popular'>
        <BrowsingList media="albums" filter="most_popular"/>
        </Route>
        <Route exact path='/products/browser/albums/newest'>
        <BrowsingList media="albums" filter="newest"/>
        </Route>
        <Route exact path='/products/browser/albums/best'>
        <BrowsingList media="albums" filter="best"/>
        </Route>
  </div>
  );
    }
}

export default Browser;
