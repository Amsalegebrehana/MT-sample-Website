import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
     
        <footer className=" mt-5 bg-dark text-center text-white">
        
         
          <div className="container text-center text-md-left">
        
           
            <div className="row">
        
             
              <div className="col-md-4 mx-auto">
        
              
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur
                  adipisicing elit.</p>
        
              </div>
             
        
              <hr className="clearfix w-100 d-md-none"/>
        
             
              <div className="col-md-2 mx-auto">
        
               
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <p >Link 1</p>
                  </li>
                  <li>
                    <a >Link 2</a>
                  </li>
                  <li>
                    <a >Link 3</a>
                  </li>
                  <li>
                    <a >Link 4</a>
                  </li>
                </ul>
        
              </div>
             
        
              <hr className="clearfix w-100 d-md-none"/>
        
             
              <div className="col-md-2 mx-auto">
        
               
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a >Link 1</a>
                  </li>
                  <li>
                    <a >Link 2</a>
                  </li>
                  <li>
                    <a >Link 3</a>
                  </li>
                  <li>
                    <a >Link 4</a>
                  </li>
                </ul>
        
              </div>
             
        
              <hr className="clearfix w-100 d-md-none"/>
        
             
              <div className="col-md-2 mx-auto">
        
              
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a >Link 1</a>
                  </li>
                  <li>
                    <a >Link 2</a>
                  </li>
                  <li>
                    <a >Link 3</a>
                  </li>
                  <li>
                    <a >Link 4</a>
                  </li>
                </ul>
        
              </div>
          
        
            </div>
           
          </div>
       
        
          <hr/>
        
       
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <Link to="/register"  className="btn btn-danger btn-rounded">Sign up!</Link>
            </li>
          </ul>
         
        
          <hr/>
        
        
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
         
          <div className="footer-copyright text-center py-3">?? 2020 Copyright:
            <Link to="/"> MT sample</Link>
          </div>
        
        
        </footer>
      
    ); 
}
