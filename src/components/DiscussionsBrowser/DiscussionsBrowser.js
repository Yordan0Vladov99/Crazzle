
import './DiscussionsBrowser.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';
import DiscussionsBrowsingList from '../DiscussionsBrowsingList/DiscussionsBrowsingList';
class Browser extends React.Component{
    render(){
        let filter='';
        switch(this.props.match.params.filter){
                case 'most_popular': filter="Most Popular";break;
                case 'newest': filter="Latest";break;
        }
        let media='';
        let filters='';
        switch(this.props.match.params.media){
            case 'discussions': media="Discussions";filters=<div className="filters">
            <div>
                <h1 className="headers">{filter} {media}</h1>
            </div>

            <div className="dropdown-filter-container">
                <button className="filter_button"><FontAwesomeIcon className="icon" icon={faBars} /> Filters</button>
                <div className="dropdown-filter-content">
                    <NavLink className="menu-item" to={`/${this.props.match.params.media}/browser/most_popular`}>Most Popular</NavLink>
                    <NavLink className="menu-item" to={`/${this.props.match.params.media}/browser/newest`}>Newest</NavLink>
                </div>
            </div>
        </div> ;break;
            case 'news': media="News";filters=<div className="filters">
            <div>
                <h1 className="headers">{filter} {media}</h1>
            </div>
            </div>;break;
            case 'announcements': media="Announcements";filters=<div className="filters">
            <div>
                <h1 className="headers">{filter} {media}</h1>
            </div>
            </div>;break;
    }
          return (
    <div className="Browser">
        {filters}
        <Route exact path='/discussions/browser/most_popular'>
            <DiscussionsBrowsingList media='discussions' filter='most_popular'/>
        </Route>
        <Route exact path='/discussions/browser/newest'>
            <DiscussionsBrowsingList media='discussions' filter='newest'/>
        </Route>
        <Route exact path='/news/browser/newest'>
            <DiscussionsBrowsingList media='news' filter='newest'/>
        </Route>
        <Route exact path='/announcements/browser/newest'>
            <DiscussionsBrowsingList media='announcements' filter='newest'/>
        </Route>
  </div>
  );
    }
}

export default Browser;
