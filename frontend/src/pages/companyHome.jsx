import React from 'react'
import { Tabs,Tab} from 'react-bootstrap';
import Home from '../component/company/home';
import Profile from '../component/company/profile';
import CrateJob from '../component/company/createjob';
function companyHome() {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Home/>
  </Tab>
  <Tab eventKey="profile" title="Profile">
<Profile/>
  </Tab>
  <Tab eventKey="job" title="create job" >
<CrateJob/>
  </Tab>
</Tabs>
        </div>
    )
}

export default companyHome
