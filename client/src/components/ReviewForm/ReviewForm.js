import './ReviewForm.css';
import StarRating from '../StarRating/StarRating'

import React from 'react';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTitle= this.onChangeTitle.bind(this);
        this.onChangeResult= this.onChangeResult.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.callbackFunction = this.callbackFunction.bind(this);
        this.state = {
            name:'',
            password:'',
            result:'',
            rating:0
        };
    }
    callbackFunction = (childData) => {
        this.setState({rating: childData});
  }
    handleClick = () => {
        this.props.history.push(`/products/${this.props.match.params.media}/${this.props.match.params.id}`);
        window.location.reload();
      };
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }
    onChangeResult(e) {
        this.setState({ result: e })
    }
    onSubmit(e) {
        e.preventDefault()
        var review={};
        var user=JSON.parse(localStorage.getItem('user'));
        review["author"]=user.user_name;
        review["media"]=this.props.match.params.media;
        review["product"]=this.props.match.params.id;
        review["title"]=this.state.title;
        review["description"]=this.state.description;
        review["rating"]=this.state.rating;
        var isError=0;
        if(this.state.title.length===0){
            document.getElementById('title-error').innerHTML="Required Field";
            document.getElementById('title-error').style.display="flex";
            isError=1;
        }else if(this.state.title.length>100){
            document.getElementById('title-error').innerHTML="Title is too long. Max Length is 100 characters";
            document.getElementById('title-error').style.display="flex";
            isError=1;
        }
        else{
            document.getElementById('title-error').style.display="none";
        }


        if(this.state.description.length===0){
            document.getElementById('description-error').innerHTML="Required Field";
            document.getElementById('description-error').style.display="flex";
            isError=1;
        }else if(this.state.description.length>10000){
            document.getElementById('description-error').innerHTML="Description is too long. Max Length is 20 characters";
            document.getElementById('description-error').style.display="flex";
            isError=1;
        }
        else{
            document.getElementById('description-error').style.display="none";
        }

        if(isError===1){
            return false
        }
        else{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review) 
        };
        fetch('/api/addReview', requestOptions)
            .then(res => res.json()).then(result=>this.setState({result},() => 
            {console.log('result fetched...', result);
            if(result.msg==='Review is added'){
                this.handleClick();
            }
        }
            )).catch(error=>{console.error(error)})           
     }  
               
        
    }

    render(){
        return (
    <div className="ReviewForm">
        <h1 className="headers">Write your Review Here </h1>
        <span className="field-name">Rating</span>
        <div className="field-input star"><StarRating parentCallback = {this.callbackFunction}/></div>
        <span className="field-name">Title</span>
        <input className="field-input" id="title" type="text" value={this.state.title} onChange={this.onChangeTitle}></input>
        <span id="title-error" className="error"></span>
        <span className="field-name">Write your Review Here</span>
        <textarea className="field-input" id="description" rows="6" placeholder="Write your review here..." value={this.state.description} onChange={this.onChangeDescription}/>
        <span id="description-error" className="error"></span>
        <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
    </div>
  );
}
}

export default ReviewForm;