import React, {Component} from 'react';
import './Announcements.css'

class Announcements extends Component{
    constructor(props){
        super(props);
        this.state = {announcements: []};
    }
    componentDidMount(){
        fetch('/api/top_announcements')
        .then(res=>res.json())
        .then(announcements => this.setState({announcements},() => console.log('Announcements fetched...', announcements)));
    }
    render(){
        return(
            <div>
            <h1 className="headers">Announcements</h1>
    <div className="announcements">
        
            {this.state.announcements.map(announcement =><div className="announcement">
            <img className="profile_photo" src={`/api/working_persons/${announcement.ann_author}/pictures`} alt=""/>
            <div className="annou_body">
                <div>
                    <div className="tags">
                        <span>By: </span>
                        <span className="author">{announcement.wp_name}</span>
                    </div>
                    <div className="description">
                        <p>{announcement.ann_description}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        )}
    </div>
    </div>);
}
}
export default Announcements;