import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import ReviewTextField from './ReviewTextField';


const ReviewCreate = (props) => {
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    fetch('https://travel-app-server.herokuapp.com/api/email/experience/', { 
      method: 'POST', 
      body: JSON.stringify({log: {location: location, review: review}}), 
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
      })
    }) .then((res) => res.json())
    .then((logData) => { 
      setLocation(''); 
      setReview(logData);  
      // props.fetchReviews(); 
    })
  }
// The function ReviewCreate is posting to the database and then resetting the location and review. I'm not sure if I should reset my location and review. If I don't, what should I place within the ('') ? 

return (
<div>

  <ReviewTextField />


</div>

)
}

export default ReviewCreate 

