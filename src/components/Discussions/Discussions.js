import React, {Component} from 'react';
import './Discussions.css'

class Discussions extends Component{
    constructor(props){
        super(props);
        this.state = {discussions: []};
    }
    componentDidMount(){
        fetch('/api/top_discussions')
        .then(res=>res.json())
        .then(discussions => this.setState({discussions},() => console.log('discussions fetched...', discussions)));
    }
    render(){
        const Related = str => {
            if(str!=null){
                return <span>{str}</span>
            }
            else{
                return null
            }
        }
        const ImageValidation = str => {
            if(str.dis_img!=null){
                return <img className="dis-img" src={`/api/discussions/pictures/${str.dis_id}`} alt=""></img>
            }
            else{
                return null
            }
        }
        return(
            <div>
            <h1 className="headers">Top Discussions</h1>
            {
                this.state.discussions.map( discussion => 
                    <div className="Discussion">
            <div className="post-text">
            <div className="tags">
                <span>Related:</span>
                {Related(discussion.dis_related_product)}
                {Related(discussion.dis_related_person)}
                <span>,Author:</span>
                <span className="author">{discussion.dis_author}</span>
            </div>
            <div className="dis-description">
                <p> {discussion.dis_description} </p>
            </div>
            {ImageValidation(discussion)}
        </div>
        <div className="comments">
            <span>{discussion.dis_comments} </span>
            <span>Comments,</span>
            <span>{discussion.dis_upvotes-discussion.dis_downvotes}</span>
            <span>Upvotes</span>
        </div>
            
           
        </div>)}
    </div>);
}
}
export default Discussions;