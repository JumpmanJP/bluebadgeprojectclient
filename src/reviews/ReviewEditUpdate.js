import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReviewsTable from './ReviewsTable';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



const ReviewEditUpdate = (props) => {
  const [editReview, setEditReview] = useState('');
  const [editLocation, setEditLocation] = useState('');

  const classes = useStyles();
console.log(props.storeId);
  const editUpdateReview = (e) => { 
      e.preventDefault()
    fetch(`https://travel-app-server.herokuapp.com/experience/${props.storeId}`, { 
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': props.token 
    }),
    body: JSON.stringify({ 
      locationOfExperience: editLocation,
      ownerOfExperience: props.storeId,
      reviewsOfExperience: editReview 
    })
  }) .then((res) => res.json())
  .then(() =>  {
    props.fetchReviewsTwo()})
  }
// Justin helped me find my last error that was preventing me from updating to the site. My PROPS agian. God damn props. I have got to get better at passing props. props.fetchReviewsTwo needed to be passed to <ReviewEditUpdate from the ReviewsComponent.js file. Eric also helped me find a potential error with CORS. My app.js file for my SERVER needed to also called let cors=require('cors) and app.use(cors()). This was after we did npm install cors to update cors on my application. THE BIGGEST TAKEAWAY FROM THIS PROJECT WAS THE USE OF PROPS. IT IS AWESOME WHEN UTILIZED PROPERLY.



// console.log(props.review.id);
return(
  <Modal isOpen={props.isOpen}>
    <ModalHeader>Update Your Review</ModalHeader>
    <ModalBody>
      <Form onSubmit={(e) => {editUpdateReview(e)}} >
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel  htmlFor="outlined-age-simple">
            City
          </InputLabel>
          <Select
            value={editLocation}
            onChange={(e) => {setEditLocation(e.target.value)}}
            // labelWidth={labelWidth}
            inputProps={{
              name: 'age',
              id: 'outlined-age-simple',
            }}
            >
  
            <MenuItem value='Prague'> Prague </MenuItem>
            <MenuItem value='Hanoi'> Hanoi </MenuItem>
            <MenuItem value='Tokyo'> Tokyo </MenuItem>
  
          </Select>
        </FormControl>
        <FormGroup>
          <Label htmlFor="review">Edit Review:</Label>
          <Input name="review"  onChange={(e) => setEditReview(e.target.value)}/>
        </FormGroup>

        <Button type="submit">Update Review</Button>
      </Form>
    </ModalBody>
  </Modal>
)    
}

export default ReviewEditUpdate;



