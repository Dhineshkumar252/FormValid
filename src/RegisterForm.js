import React from 'react';
import './form.css';
import {TextField} from '@mui/material'

class RegisterForm extends React.Component {
constructor() {
super();
this.state = {
fields: {},
errors: {}
}
this.handleChange = this.handleChange.bind(this);
this.submituserRegistrationForm = 
this.submituserRegistrationForm.bind(this);
};
handleChange(e) {
let fields = this.state.fields;
fields[e.target.name] = e.target.value;
this.setState({
fields
});
}
submituserRegistrationForm(e) {
e.preventDefault();
if (this.validateForm()) {
let fields = {};
fields["username"] = "";
fields["email"] = "";
fields["password"] = "";
this.setState({fields:fields});
alert("Form submitted");
}
}
validateForm() {
let fields = this.state.fields;
let errors = {};
let formIsValid = true;
if (!fields["username"]) {
formIsValid = false;
errors["username"] = "*Please Fill the column.";
}
if (typeof fields["username"] !== "undefined") {
if (!fields["username"].match(/^[a-z|A-Z ]*$/)) {
formIsValid = false;
errors["username"] = "*Please enter alphabet characters only.";
}
}
if (!fields["email"]) {
formIsValid = false;
errors["email"] = "*Invalid Email";
}
if(!fields.email){
    errors["email"]="*Invalid Email"
}

if (!fields["password"]) {
formIsValid = false;
errors["password"] = "*Please enter your password.";
}
if (typeof fields["password"] !== "undefined") {
if (!fields["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
formIsValid = false;
errors["password"] = "*Password is Weak";
}
}
this.setState({
errors: errors
});
return formIsValid;
}
render() {
return (
<div id="main-registration-container">
<div id="register">
<center><h2>Form Validation</h2></center>
<form method="post" name="userRegistrationForm" onSubmit= 
{this.submituserRegistrationForm} >
<label>Enter your username</label>
<TextField type="text" name="username" value={this.state.fields.username}
onChange={this.handleChange} />
<div className="errorMsg">{this.state.errors.username}</div>
<label>Enter your email</label>
<TextField type="text" name="email" value={this.state.fields.email}
onChange={this.handleChange} />
<div className="errorMsg">{this.state.errors.email}</div>
<label>Enter your password</label>
<TextField type="password" name="password"
value={this.state.fields.password} onChange={this.handleChange} />
<div className="errorMsg">{this.state.errors.password}</div>
<input type="submit" className="button" value="Validate"/>
</form>
</div>
</div>
);
}
}
export default RegisterForm;