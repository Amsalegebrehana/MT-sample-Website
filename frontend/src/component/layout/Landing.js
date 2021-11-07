import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-4">MT Sample
                            </h1>
                            <p className="lead"> Molto Terfo find your job, get hired</p>
                            <hr />
                            <Link to="/register" className="btn btn-lg btn-info mr-2">Register As User</Link>
                            <Link to="/registercompany" className="btn btn-lg btn-light">Register As Company</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
export default Landing;