// import React, {useState, useEffect} from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import { getThemeProps } from '@material-ui/styles';
// // import CitySelect from '../cityIndex/CitySelect';
// import ReviewsTable from './ReviewsTable';
// import ReviewCreate from './ReviewCreate';
// import ReviewsComponent from './ReviewsComponent';

// const Index = (props) => {
//     const [selected, setSelected] = useState(false);
//     // const [ city, setCity] = useState('');
//     const [reviews, setReviews] = useState('');
//     const [location, setLocation] = useState('');
  
//     const fetchReviews = (e) => { 
//       e.preventDefault();
//       fetch(`https://travel-app-server.herokuapp.com/api/email/experience/${props.selectedCity}`, { 
//         method: 'GET', 
//         body: JSON.stringify( {locationOfExperience: location, reviewsOfExperience: reviews}), 
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           'Authorization': props.token 
//         })
//       }) .then((res) => res.json())
//       .then((logData) => { 
//         console.log(logData);
//         setReviews(logData);
//         setLocation(''); 
//       })
//     }

//     // useEffect(() => {
//     //   fetchReviews();
//     // }, [])



//     return (
//         <div className="App">
                  
//           <ReviewCreate />
//           <ReviewsComponent  fetchReviews={fetchReviews} reviewCreate={reviews}/>
    
//         </div>
//       );
//     }
    
//     export default Index;