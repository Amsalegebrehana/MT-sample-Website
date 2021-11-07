import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from "../layout/cards";
import { api} from '../../config';

function Home() {

    const [user, setUser] = useState('');
    const [job, setJob] = useState([]);
    const [newJob, setNewJob] = useState([]);

    useEffect(() => {

    //     const getUser = async () => {
    //         const user = await axios.get("http://localhost:5000/api/company");
    //         const id = user._id;
    //         setUser(user);
    //         const job = await axios.get(`http://localhost:5000/api/job${id}`);
    //         setJob(job);
    //   }
                    // un comment this code after u register the company

        const getJob =  () => {
             axios.get("http://localhost:5000/api/job/all")   // change 
               .then((res) => setJob(res.data))
                .catch((err) => console.error(err));
        }
        getJob();
    }, []);

    return (
        <div>
            <h3>Posted Job</h3>
            <div className="job-container">
                {/* <Card/> */}
        
                {job?.map(job => {
                    return <Card key={job._id} data={job} />
                })
                }
            </div>
        </div>
    );
}

export default Home;



