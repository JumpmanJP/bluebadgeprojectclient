import React, {useState, useEffect} from 'react';
// import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import ReviewTextField from './ReviewTextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



const ReviewCreate = (props) => {
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const classes = useStyles();
  

  const handleSubmit = (e) => { 
    console.log(review)
    console.log(props.token)
    e.preventDefault();
    fetch(`https://travel-app-server.herokuapp.com/experience/create/`, { 
      method: 'POST', 
      body: JSON.stringify( {locationOfExperience: props.selectedCity, reviewsOfExperience: review}), 
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
      })
    }) .then((res) => res.json())
    .then((logData) => { 
      console.log(logData)
      setLocation(''); 
      setReview('');  
      // props.fetchReviews(); 
    })
  }
// The function ReviewCreate is posting to the database and then resetting the location and review. I'm not sure if I should reset my location and review. If I don't, what should I place within the ('') ? 




return (
<div>
<div>

  <ReviewTextField setReview={setReview} />


</div>

<div>

<Button  onClick={e => handleSubmit(e)} variant="contained" color="primary" className={classes.button}> SUBMIT </Button>

<input
  accept="image/*"
  className={classes.input}
  id="contained-button-file"
  multiple
  type="file"
/>

</div>
</div>
)
}
// }
export default ReviewCreate 

