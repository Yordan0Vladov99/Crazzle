import './UserPage.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';

class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:{}}
    }
    componentDidMount(){
        fetch(`/api/users/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(user => this.setState({user},() => console.log('user fetched...', user)));
    }
    render(){
        return (
    <div className="UserPage">
        <div className="profile">
         <img src={`/api/users/${this.state.user.user_id}/pictures`} className="profile-photo" alt=""/>
        <div className="user-info">
        <span className="username">Username:{this.state.user.user_name}</span>
        <span className="date-of-birth">Born:{this.state.user.user_birthdate}</span>
        <span className="description">{this.state.user.user_description}</span>
        <button>Edit Profile</button>
        </div>
        </div>
        
    </div>
  );
}
}

export default UserPage;