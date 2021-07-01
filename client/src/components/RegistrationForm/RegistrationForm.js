import './RegistrationForm.css';
import { useHistory } from 'react-router-dom'

import React from 'react';

class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        this.onChangeBirthDate= this.onChangeBirthDate.bind(this);
        this.onChangeResult= this.onChangeResult.bind(this);
    //    this.onChangeProfilePic= this.onChangeProfilePic.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            name:'',
            password:'',
            description:'',
            birth_date:'',
            result:''
        //    profile_pic:'',
        //    profile_pic_file:''

        };
    }
    handleClick = () => {
        this.props.history.push("/home");
      };
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangeBirthDate(e) {
        this.setState({ birth_date: e.target.value })
    }
    onChangeResult(e) {
        this.setState({ result: e })
    }
    
    //onChangeProfilePic(e) {
    //    this.setState({ profile_pic: e.target.value })
    //    this.setState({profile_pic_file: e.target.files[0]})
    //}
    onSubmit(e) {
        e.preventDefault()
        var user={};
        user["username"]=this.state.name;
        user["password"]=this.state.password;
        user["description"]=this.state.description;
        user["birth_date"]=this.state.birth_date;
        //user["profile_pic"]=this.profile_pic;
        console.log(user)
        var username_reg=/^.+{,20}$/;
        var description_reg=/^.*{,140}$/;
        var passwd_reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{,20}$/;
        var isError=0;
        if(this.state.name.length===0){
            document.getElementById('username-error').innerHTML="Required Field";
            document.getElementById('username-error').style.display="flex";
            isError=1;
        }else if(this.state.name.length>20){
            document.getElementById('username-error').innerHTML="Username is too long. Max Length is 20 characters";
            document.getElementById('username-error').style.display="flex";
            isError=1;
        }
        else{
            document.getElementById('username-error').style.display="none";
        }


        if(this.state.password.length===0){
            document.getElementById('password-error').innerHTML="Required Field";
            document.getElementById('password-error').style.display="flex";
            isError=1;
        }else if(this.state.password.length>20){
            document.getElementById('password-error').innerHTML="Password is too long. Max Length is 20 characters";
            document.getElementById('password-error').style.display="flex";
            isError=1;
        }
        else{
            document.getElementById('password-error').style.display="none";
        }

        if(this.state.description.length>140){
            document.getElementById('description-error').innerHTML="Description is too long. Max Length is 140 characters";
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
            body: JSON.stringify(user) 
        };
        fetch('/api/new_user', requestOptions)
            .then(res => res.json()).then(result=>this.setState({result},() => 
            {console.log('result fetched...', result);
            if(result.msg==='Registration is successful'){
                localStorage.setItem('loggedIn',true)
                localStorage.setItem('user',user);
                this.handleClick();
            }
        }
            )).catch(error=>{console.error(error)})
        
        
        
        //const formData = new FormData()
        //formData.append('image',this.state.profile_pic_file);
        //fetch('/api/saveImage', {
        //    method: "POST",
        //    body:formData, 
        //    headers: {'Accept': 'multipart/form-data'},
        //    credentials: 'include'
        //    })
        //    .then(res => res.json())
        //    .then(res => {
        //           console.log(res.msg);
        //           
        //         }).then(this.handleClick()).catch(error=>{console.error(error)})
        
                 
     }  
               
        
    }

    render(){
        return (
    <div className="RegistrationForm">
        <h1 className="headers">Create Account</h1>
        <span className="field-name">User Name</span>
        <input className="field-input" id="username" type="text" value={this.state.name} onChange={this.onChangeName}></input>
        <span id="username-error" className="error"></span>
        <span className="field-name">Password</span>
        <input id="password" className="field-input" type="password" value={this.state.password} onChange={this.onChangePassword}></input>
        <span id="password-error" className="error"></span>
        <span className="field-name">Date of Birth</span>
        <input id="birthdate" className="field-input" type="date" value={this.state.birth_date} onChange={this.onChangeBirthDate}></input>
        <span className="field-name">Description</span>
        <textarea id="description" className="field-input" rows="5" value={this.state.description} onChange={this.onChangeDescription}></textarea>
        <span id="description-error" className="error"></span>
        {/*<span className="field-name">Profile Picture</span>
        <input id="profile_pic" className="field-input" name="file" type="file" accept="image/png, image/jpeg" value={this.state.profile_pic} onChange={this.onChangeProfilePic}/>*/}
        <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
        
    </div>
  );
}
}

export default RegistrationForm;