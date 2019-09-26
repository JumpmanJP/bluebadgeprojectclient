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

  const editUpdateReview = (e,id) => { 
      e.preventDefault()
    fetch(`https://travel-app-server.herokuapp.com/experience/${id}`, { 
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': props.token 
    }),
    body: { 
      locationOfExperience: editLocation,
      ownerOfExperience: id,
      reviewsOfExperience: editReview 
    }
  }) .then((res) => res.json())
  .then(() =>  {
    props.fetchReviewsTwo()})
  }
console.log(props.review.id);
return(
  <Modal isOpen={props.isOpen}>
    <ModalHeader>Update Your Review</ModalHeader>
    <ModalBody>
      <Form onSubmit={(e) => {editUpdateReview(e, props.review.id)}} >
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



