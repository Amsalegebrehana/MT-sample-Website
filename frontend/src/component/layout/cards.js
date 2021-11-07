import React from 'react'
import {Card ,ListGroup,Badge} from 'react-bootstrap';
function Cards({ data }) {

    console.log(newDate);
    return (
        <Card style={{ width: '48rem' }}>
        <Card.Body>
                <Card.Header>{ data.jobTitle}</Card.Header>
              
            </Card.Body>
            <Card.Body>
            <Card.Subtitle  className="mb-2 text-muted">
             {data.companyName }🌇
         </Card.Subtitle>
            <Card.Text>
            {data.description}
          </Card.Text>
          </Card.Body>
            <div className="job-corner">
                <div>
                <Card.Body>
                <h5  className="mb-2 text-muted">Requirements</h5>
            <ListGroup variant="flush">
                    {
                        data.jobRequirements.map(require => {
                            return <ListGroup.Item>
                              ✅ {require}
                            </ListGroup.Item> 
                        })
                    }
                </ListGroup>
                    </Card.Body>
                
                </div>
                <div>
                    <Card.Body>
                    <Badge bg="secondary">{data.jobType} ⏲</Badge>
           
                    </Card.Body>
                </div>
            </div>
            <Card.Body>
            💰  {data.salary}
            </Card.Body>
            <Badge bg="warning">{data.jobEndDate} ⏲</Badge>
      </Card>
    )
}

export default Cards;