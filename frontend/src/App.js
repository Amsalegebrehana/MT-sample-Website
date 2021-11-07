import React , {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import './App.css';
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import About from "./component/layout/About";
import RegisterAsCompany from "./component/auth/registerascompany";
import CompanyHome from "./pages/companyHome";

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                
                <Navbar/>
                <Routes>
                    
                <Route exact path='/' element = {<Landing/>}/>
              
                   
              
                </Routes>
                <div className="container">
                    <Routes>
                    <Route exact path='/register' element = {<Register/>}/>
                    <Route exact path='/registercompany' element = {<RegisterAsCompany/>}/>
                    <Route exact path='/login' element={<Login />} />
                            <Route exact path='/company' element={<CompanyHome />} />
                            
                   <Route exact path='/' element={<About />} />
                   </Routes>
                </div>
              
            
                <Footer/>
            </div>
            </Router>
        );
    }
}
export default App;
// ReactDOM.render(<App/>, document.getElementById('root'))