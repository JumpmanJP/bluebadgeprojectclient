import React, {useState} from 'react';
import {Table, Button} from 'reactstrap';

const ReviewsComponent = (props) => {
    const [locationOfExperience, setLocationOfExperience] = useState('');
    const [reviewsOfExperience, setReviewsOfExperience] = useState('');
    const [ownerOfExperience, setOwnerOfExperience] = useState('');
    const [review, setReview] = useState('');


  const deleteReview = (review) => {
    fetch(`https://travel-app-server.herokuapp.com/experience/${ownerOfExperience.id}`, {
        method: 'DELETE', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchReviews())
  }

  const updateReview = (review) => {
    fetch(`https://travel-app-server.herokuapp.com/experience/${ownerOfExperience.id}`, {
        method: 'PUT', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchReviews())
  }

  const reviewsMapper = () => {
    console.log(props);
    return props.reviewsTable.map((review, index) => {
      return(
        <tr key={index}>
          <th scope="row">{setLocationOfExperience.STRING}</th>
          <td>{props.selectedCity}</td>
          <td>{props.reviewsOfExperience}</td>
          <td>
            <Button color="warning"onClick={() => {updateReview(review)}}>Update</Button>
            <Button color="danger" onClick={() => {deleteReview(review)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

  return(
    <>
    <h3>Reviews History</h3>
    <hr/>
    <Table striped>
      <thead>
        <tr>
          <th>Location</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        {reviewsMapper()}
      </tbody>
    </Table>
    </>
  )
}

export default ReviewsComponent;