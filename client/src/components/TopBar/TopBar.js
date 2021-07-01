import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import './TopBar.css'

class TopBar extends Component{
    constructor(props){
        super(props);
        this.onChangeLogStatus.bind(this);
        this.state={
            loggedIn:false
        }
    }

    onChangeLogStatus(e){
        this.setState({loggedIn:e});
    }
    logOut = () => {
        localStorage.setItem('loggedIn',false)
        localStorage.setItem('user',{})
        window.location.reload();
      };
    componentDidMount(){
        window.addEventListener("storage", e =>
        this.onChangeLogStatus(e.loggedIn))
    }
    render(){
         
        var account=''
        var user=localStorage.getItem('loggedIn');
        if(user==='true'){
            account=<div className="Account">
                <NavLink className="menu_button" to="/users/7">Profile</NavLink>
                <button className="menu_button" onClick={this.logOut}>Logout</button>
            </div>
        }else{
            account=<div className="Account">
                <NavLink className="menu_button" to="/login">Login</NavLink>
                <NavLink className="menu_button"to="/registration">Register</NavLink>
            </div>
        }
        return(
            <div className="top_bar_container">
        <NavLink to='/home' className="menu_button"><FontAwesomeIcon className="icon" icon={faHome}/> Home</NavLink>
        <div className="dropdown-container">
            <button className="menu_button"><FontAwesomeIcon className="icon" icon={faBars} /> Menu</button>
            <div className="dropdown-content">
                <NavLink className="menu-item" to="/products/browser/films/most_popular">Films</NavLink>
                <NavLink className="menu-item" to="/products/browser/video_games/most_popular">Video Games</NavLink>
                <NavLink className="menu-item" to="/products/browser/albums/most_popular">Music</NavLink>
                <NavLink className="menu-item" to="/products/browser/tv_shows/most_popular">TV Shows</NavLink>
                <NavLink className="menu-item" to="/products/browser/books/most_popular">Books</NavLink>
                <NavLink className="menu-item" to="/news/browser/newest">News</NavLink>
                <NavLink className="menu-item" to="/announcements/browser/newest">Announcements</NavLink>
                <NavLink className="menu-item" to="/discussions/browser/most_popular">Discussions</NavLink>
              </div>
        </div>
        <form id="search_container">
            <input type="text" placeholder="Search" id="search_bar"/>
            <button id="search_button" ><FontAwesomeIcon className="icon" icon={faSearch} /></button>
        </form>
        {account}
    </div>
        );
}
}
export default TopBar;