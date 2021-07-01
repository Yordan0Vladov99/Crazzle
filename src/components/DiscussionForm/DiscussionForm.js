import './DiscussionForm.css';

import React from 'react';

class DiscussionForm extends React.Component{
    constructor(props){
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeFile= this.onChangeFile.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.state = {
            description:'',
            pic:'',
            file:''
        };
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangeFile(e) {
        this.setState({ pic: e.target.value})
        this.setState({file: e.target.files[0]})
    }
    handleClick = () => {
        this.props.history.push(`/products/${this.props.match.params.media}/${this.props.match.params.id}`);
        window.location.reload();
      };
    onSubmit(e) {
        e.preventDefault()
        var discussion={};
        var user=JSON.parse(localStorage.getItem('user'));
        discussion["author"]=user.user_name;
        discussion["media"]=this.props.match.params.media;
        discussion["product"]=this.props.match.params.id;
        discussion["description"]=this.state.description;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today =yyyy + '-' + mm + '-' + dd;
        discussion["date"]=today;
        var isError=0;
        var isPic=0;


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

        if(this.state.pic!=""){
            isPic=1;
        }

        if(isError===1){
            return false
        }
        else{
                   
       

        if(isPic==1){
            discussion["pic"]=this.state.pic.replace(/^.*[\\\/]/, '');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(discussion) 
            };
            fetch('/api/addDiscussionWithImage', requestOptions)
                .then(res => res.json()).then(result=>this.setState({result},() => 
                {console.log('result fetched...', result);
                if(result.msg==='Discussion is added'){
                    this.handleClick();
                }
            }
                )).catch(error=>{console.error(error)})




            const formData = new FormData()
            formData.append('image',this.state.file);
            fetch('/api/saveImage', {
                method: "POST",
                body:formData, 
                headers: {'Accept': 'multipart/form-data'},
                credentials: 'include'
                })
                .then(res => res.json())
                .then(res => {
                       console.log(res.msg);
                       
                     }).then(this.handleClick()).catch(error=>{console.error(error)})    
                    }
                else{
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(discussion) 
                    };
                    fetch('/api/addDiscussion', requestOptions)
                        .then(res => res.json()).then(result=>this.setState({result},() => 
                        {console.log('result fetched...', result);
                        if(result.msg==='Discussion is added'){
                            this.handleClick();
                        }
                    }
                        )).catch(error=>{console.error(error)})
                }
                }
        
        
    }


    render(){
        return (
    <div className="DiscussionForm">
        <h1 className="headers">Create a Discussion</h1>
        <textarea className="field-input" rows="6" value={this.state.description} onChange={this.onChangeDescription} placeholder="Write your topic here..."/>
        <span id="description-error" className="error"></span>
    <input id="profile_pic" className="field-input" type="file" value={this.state.pic} onChange={this.onChangeFile} accept="image/png, image/jpeg"/>
        <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
    </div>
  );
}
}

export default DiscussionForm;