import './DiscussionPage.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp,faThumbsDown,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import React from 'react';

class DiscussionPage extends React.Component{
    constructor(props){
        super(props);
        this.onChangeUserComment=this.onChangeUserComment.bind(this);
        this.sendComment=this.sendComment.bind(this);
        this.setUser=this.setUser.bind(this);
        //this.sendVote=this.sendVote.bind(this);
        this.state = {discussion:{},
                    userComment:"",
                    user:{},
                    comments:[]}
    }
    setUser(e){
            this.setState({user:e});
    }
    sendVote = (id,type,to,author) => e => {
        e.preventDefault();
        var author_json=JSON.parse(author);
        
        var vote={}
        vote["id"]=id;
        vote["type"]=type;
        vote["to"]=to;
        vote["author"]=author_json.user_id;
        console.log(`Vote:${JSON.stringify(vote)}`);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vote) 
        };
        fetch('/api/logVote', requestOptions)
            .then(res => res.json()).then(result=>this.setState({result},() => 
            {console.log('result fetched...', result);
            if(result.msg==='Vote is logged'){
                window.location.reload();
            }
        }
            )).catch(error=>{console.error(error)}) 
        
    }
    sendComment(e){
        e.preventDefault()
        var comment={};
        var user=JSON.parse(localStorage.getItem('user'));

        comment["author"]=user.user_id;
        comment["description"]=this.state.userComment;
        comment["discussion"]=this.props.match.params.id;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment) 
        };
        fetch('/api/logComment', requestOptions)
            .then(res => res.json()).then(result=>this.setState({result},() => 
            {console.log('result fetched...', result);
            if(result.msg==='Comment is logged'){
                window.location.reload();
            }
        }
            )).catch(error=>{console.error(error)}) 
    }
    onChangeUserComment(e){
        this.setState({userComment:e.target.value})
    }
    componentDidMount(){
        fetch(`/api/discussions/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(discussion => this.setState({discussion},() => console.log('discussion fetched...', discussion)));
        fetch(`/api/discussions/${this.props.match.params.id}/comments`)
        .then(res=>res.json())
        .then(comments => this.setState({comments},() => console.log('comments fetched...', comments)));
        this.setUser(localStorage.getItem('user'))
    }

    
    render(){
        const ImageValidation = str => {
            if(str.dis_img!=null){
                return <img className="dis-img" src={`/api/discussions/pictures/${str.dis_id}`} alt=""></img>
            }
            else{
                return null
            }
        }
        var commentField='';
        if(localStorage.getItem('loggedIn')==='true'){
            commentField=
            <div className="userComment">
                    <textarea className="comment-field" rows="6" value={this.state.userComment} onChange={this.onChangeUserComment}  placeholder="Comment here..."/>
                    <div className="button-holder">
                    <button class="vote-button" onClick={this.sendComment} disabled={!this.state.userComment}><FontAwesomeIcon className="icon" icon={faPaperPlane}/></button>
                    </div>
                    
            </div>
            
        }
        return (
            <div className="DiscussionPage">
            <div className="topic">
            <div className="post-text">
            <div className="tags">
                <span>Posted by {this.state.discussion.dis_author} on {this.state.discussion.dis_publication_date}</span>
            </div>
            <div className="dis-description">
                <p>{this.state.discussion.dis_description} </p>
                {ImageValidation(this.state.discussion)}
            </div>
            
        </div>
        <div className="options">
            <button class="vote-button" onClick={this.sendVote(this.state.discussion.dis_id,'upvote','discussion',this.state.user)}><FontAwesomeIcon className="icon" icon={faThumbsUp}/></button>
            <span class="upvotes"> {this.state.discussion.dis_upvotes}</span>
             <button class="vote-button" onClick={this.sendVote(this.state.discussion.dis_id,'downvote','discussion',this.state.user)}><FontAwesomeIcon className="icon" icon={faThumbsDown}/></button>
            <span class="upvotes"> {this.state.discussion.dis_downvotes}</span>
        </div>
            </div>
            {commentField}

            <h1 className="headers">Comments</h1>
            <div className="Comments">
                     {
                    this.state.comments.map( comment => 
                        <div className="topic">
                        <div className="post-text">
                        <div className="tags">
                            <span>Posted by {comment.comment_author}</span>
                        </div>
                        <div className="dis-description">
                            <p>{comment.comment_description} </p>
                        </div>
                        
                    </div>
                    <div className="options">
                        <button class="vote-button" onClick={this.sendVote(comment.comment_id,'upvote','comment',this.state.user)}><FontAwesomeIcon className="icon" icon={faThumbsUp}/></button>
                        <span class="upvotes"> {comment.comment_upvotes}</span>
                         <button class="vote-button" onClick={this.sendVote(comment.comment_id,'downvote','comment',this.state.user)}><FontAwesomeIcon className="icon" icon={faThumbsDown}/></button>
                        <span class="upvotes"> {comment.comment_downvotes}</span>
                    </div>
                        </div>)
                    }
            </div>
           
            
    </div>
  );
}
}

export default DiscussionPage;