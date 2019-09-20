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
      console.log(logData);
      setLocation(''); 
      setReview('');  
      props.fetchReviews(); 
    })
  }
}

return (

  <ReviewTextField />

)





















  // return(
  //   <>
  //     <h3>Write a Review</h3>
  //     <Form onSubmit={handleSubmit} >
  //     <FormGroup>
  //         <Label htmlFor="location"/>
  //         <Input type="select" name="location" value={location} onChange={(e) => setLocation(e.target.value)} >
  //           <option value="Prague">Prague</option>
  //           <option value="Hanoi">Hanoi</option>
  //           <option value="Chicago">Chicago</option>
  //         </Input>
  //       </FormGroup>
  //       <FormGroup>
  //         <Label htmlFor="review"/>
  //         <Input name="review" value={review} onChange={(e) => setReview(e.target.value)} />
  //       </FormGroup>
  //       <Button type="submit">Click to Submit</Button>
  //     </Form>
  //   </>
  // )}

export default ReviewCreate;