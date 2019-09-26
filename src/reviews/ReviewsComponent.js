import React, {useState} from 'react';
import {Table, Button} from 'reactstrap';
import ReviewsTable from './ReviewsTable';
import ReviewEditUpdate from './ReviewEditUpdate';

const ReviewsComponent = (props) => {
    // const [locationOfExperience, setLocationOfExperience] = useState('');
    // const [reviewsOfExperience, setReviewsOfExperience] = useState([]);
    // const [ownerOfExperience, setOwnerOfExperience] = useState('');
    // const [review, setReview] = useState('');
    const [fetchReviews, setFetchReviews] = useState([]);
    const [location, setLocation] = useState('');
    const [reviews, setReviews] = useState('');
    const [storeId, setStoreId] = useState('');

    const[updateActive, setUpdateActive] = useState(false);


    console.log(props.reviewsTable)



    // For my delete review, I needed to add my parameters (e,id) to the function. I also used string interpolation to add ${id} to the end of my url so that muliple diffrent ids can be used in the same url. 
    // DELETE REVIEW
    const deleteReview = (e,id) => { 
      e.preventDefault();
      fetch(`https://travel-app-server.herokuapp.com/experience/${id}`, { 
        method: 'DELETE', 
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token 
        })
      }) .then((res) => res.json())
      .then(() =>  
        fetchReviewsTwo(e))
        // console.log(logData)
        // setLocation(''); 
        // setReview('');  
    }
// We changed this function name to fetchReviewsTwo so that it would be connected to deleteReviews. We passed props from ReviewsComponent so that props.setReviews and props.setLocation and props.selectedCity would be shared. 
    const fetchReviewsTwo = (e) => { 
      // e.preventDefault();
      // console.log(e.target.value);
      // let city = e.target.value
      console.log(props.token);
      fetch(`https://travel-app-server.herokuapp.com/experience/${props.selectedCity}`, { 
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token 
        })
      }) .then((res) => res.json())
      .then((logData) => { 
        console.log(logData);
        props.setReviews(logData);
        props.setLocation(''); 
      })
    }
//THIS IS NEXT STEP. we are passing in a prop from the wrong area and getting the wrong data. The update functionality wants to work, but its having trouble.

const updateReview = (id) => { 

  setUpdateActive(!updateActive)
  setStoreId(id)

}
    //Justin helped me set up these states so that we could pass props to ReviewEditUpdate.js and keep the data in circulation. 



  return(
    <>
    <h3>Written Reviews </h3>
    <hr/>
    <Table striped>
      <thead>
        <tr>
          <th>Location</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
              {props.reviewsTable? 
               props.reviewsTable.map((review, index) => {
                return(
                  <tr key={index}>
                 {/* <th scope="row">{}</th> */}
                 <td>{review.locationOfExperience}</td>
                 <td>{review.reviewsOfExperience}</td>
                 <td>
                   <Button color="warning" onClick={(e) => updateReview(review.id)}>Update</Button>
                   </td>
                   <td>
                   <Button color="red" onClick={e => deleteReview(e,review.id)}>Delete</Button>
                 </td>
               </tr>
             )
            })
            :null}

      </tbody>

    </Table>

    <ReviewEditUpdate storeId={storeId} isOpen={updateActive} review={reviews}  token={props.token} fetchReviewsTwo={fetchReviewsTwo}/>
    </>
  )
}

export default ReviewsComponent;

//The function call reviewMapper() did not work in the function return. I needed to move my whole table  into my return for it to work. 