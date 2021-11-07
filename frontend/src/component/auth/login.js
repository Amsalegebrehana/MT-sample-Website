import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            
            email:this.state.email,
            password:this.state.password,
           

        }
        // console.log(user);
        axios.post('/api/user/register', user)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
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
                 <h3 className="mb-1">Login </h3>
                 <p className="mb-4 text-sm">if you don't have an account yet? 
                 <Link to="/register" className="text-primary login">Sign up</Link></p>
                 <div className="row">
                     <div className="col-sm-6">
                         <p className="google"><span className="fa fa-google"></span><small className="pl-3 pr-1">Login with google</small></p>
                     </div>
                     <div className="col-sm-6">
                         <p className="fb"><span className="fa fa-facebook"></span><small className="pl-3 pr-1">Login with facebook</small></p>
                     </div>
                 </div>
                 <div className="row px-3">
                     <div className="line"></div> <small className="text-muted or text-center">OR</small>
                     <div className="line"></div>
                 </div>
                
                 <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <input 
              type="email" class="form-control form-control-lg" 
              placeholder="Email Address" name="email" 
              value={this.state.email}
              onChange={this.onChange}/>
            </div>
            <div class="form-group">
              <input type="password" 
              class="form-control form-control-lg" placeholder="Password" 
              name="password" 
              value={this.state.password}
              onChange={this.onChange}/>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
                 <div className="row mb-4">
                     <div className="col-md-5"> 
                     <button className="btn btn-blue text-center mb-1">Login</button> </div>
                     <div className="col-md-7"> 
                     <small className="text-muted">By creating an account, you understand and agree to Mallo's <u>Terms of Service</u>, including the <u>User Agreement</u> and <u>Privacy Policy</u>.</small> </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>

             
         </div>
        )
    }
}

export default  Login;