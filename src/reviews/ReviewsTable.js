import React, {useState} from 'react';
import {Table, Button} from 'reactstrap';


const ReviewsTable = (props) => {

  const [deleteReview, setDeleteReview] = useState('');
  const [locationOfExperience, setLocationOfExperience] = useState('');
  const [reviewsOfExperience, setReviewsOfExperience] = useState('');

  const CityReview = (review) => {
    fetch(`https://travel-app-server.herokuapp.com/experience/${locationOfExperience.props}`, {
        method: 'GET', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchReviews())
  }



  const reviewMapper = () => {
    return props.fetchReviews.map((reviews, index) => {
      return(
        <tr key={index}>
          <th scope="row">{locationOfExperience.props}</th>
          <td>{locationOfExperience.props}</td>
          <td>{reviewsOfExperience.props}</td>
          <td>
            <Button color="warning">Update</Button>
            <Button color="danger" onClick={() => {deleteReview(reviews)}}>Delete</Button>
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
          <th>#</th>
          <th>Location</th>
          <th>Review/Rating</th>
        </tr>
      </thead>
      <tbody>
        {reviewMapper()}
      </tbody>
    </Table>
    </>
  )
}

export default ReviewsTable;