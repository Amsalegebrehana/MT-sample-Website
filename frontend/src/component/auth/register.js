import React, { Component } from 'react'
import axios from 'axios';
class Register extends Component {
    constructor(){
        super();
        this.state = {
            fname :'',
            lname:'',
            email:'',
            password:'',
            address:'',
            gender:'',
            category:'',
            errors:{}

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            fname:this.state.fname,
            lname:this.state.lname,
            gender:this.state.gender,
            bio:this.state.bio,
            skill:this.state,
            email:this.state.email,
            password:this.state.password,
            address:this.state.address,
            category:this.state.category,
            skillLevel:this.state.skillLevel,


        }
        // console.log(newUser);
        axios.post('http://localhost:5000/api/user/register', newUser)
        .then(res => console.log(res.data))
        .catch(err =>console.log(err.response.data))
    }
    render() {
        return (
            <div>
               <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 bg-light pb-5">
                    <div className="row px-3"> 
                    <img src="https://i.imgur.com/pFCf3zf.jpg" className="logo"/> </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5"> 
                    <img src="https://i.imgur.com/ucirQQf.png" className="image"/> </div>
                    <div className="row px-3 text-center justify-content-center">
                        <h4>Collect everything in one place</h4> <small className="text-muted px-5 mx-1 mx-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <h3 className="mb-1">Create your Mello account</h3>
                    <p className="mb-4 text-sm">Already have an account? <a className="text-primary login">Log In</a></p>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="google"><span className="fa fa-google"></span><small className="pl-3 pr-1">Sign up with google</small></p>
                        </div>
                        <div className="col-sm-6">
                            <p className="fb"><span className="fa fa-facebook"></span><small className="pl-3 pr-1">Sign up with facebook</small></p>
                        </div>
                    </div>
                    <div className="row px-3">
                        <div className="line"></div> <small className="text-muted or text-center">OR</small>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                    <div className="row mt-3 form-group">
                        <div className="col-md-6"> 
                            <input className="form-control form-control-lg" placeholder="First name"
                            type="text" name="fname" 
                            value={this.state.fname}
                            onChange={this.onChange}/> </div>
                        <div className="col-md-6"> 
                            <input type="text" name="lname" className="form-control form-control-lg" placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.onChange}/> </div>
                    </div>
                            
                            <div class="form-group">
                            <input type="email" class="form-control form-control-lg" 
                            placeholder="Email Address" name="email" 
                            value={this.state.email}
                        onChange={this.onChange}/>
                            <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                            </div>

                            <div class="form-group">
                            <input type="password"  
                            className="form-control form-control-lg" placeholder="Password" name="password" 
                            value={this.state.password}
                            onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
                            </div>
                            <div className="form-group" onChange={this.onChange}>
                                    <input type="radio" value={this.state.gender}  name="gender"/> Male
                                    <input type="radio" value={this.state.gender}  name="gender"/> Female
                                </div>
                            <div className="form-group">
                            <div className="row px-3"> 
                            <input  className="form-control form-control-lg"
                                type="text" name="address"  placeholder="Address"
                                value={this.state.address} 
                                onChange={this.onChange}/> 
                                </div>
                            </div>
                            <div className="form-group">
                            <div className="row px-3"> 
                             <input type="text" className="form-control form-control-lg" name="category" placeholder="Category"
                         value={this.state.category}
                         onChange={this.onChange}/> 
                        </div>
                            </div>
                         
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1" checked={true} />
                                    Option 1
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option2" />
                                    Option 2
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    Option 3
                                </label>
                                </div>
                            <div className="row px-3 form-group"> 
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>choose Category select menu</option>
                            <option value="1">Developer</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                         </div>
                         

                            <input type="submit" class="btn btn-info btn-block mt-4" />

                        </form>
                    
                     
                        
                    
                </div>
            </div>
        </div>
    </div>
</div>

                
            </div>
        )
    }
}

export default  Register;