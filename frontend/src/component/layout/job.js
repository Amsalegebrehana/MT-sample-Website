import React,{useState,useEffect} from 'react'
import Card from './cards';
import axios from 'axios';

function Job() {

    const [job, SetJob] = useState([]);

useEffect(() => {

    const getJob = () => {
        axios.get("http://localhost:5000/api/job/all")
            .then((res) => SetJob(res.data))
            .catch((err) => console.error(err));
}
    getJob();
},[])


    return (
        <div className="job-container">
            {job?.map(job => {
               return <Card key={job._id} data={job}/>
           })
           }
        </div>
    )
}

export default Job;