import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Search from '../Search';
import { getThemeProps } from '@material-ui/styles';
import CitySelect from '../cityIndex/CitySelect';
import ReviewsTable from './ReviewsTable';
import ReviewCreate from './ReviewCreate';

function Index() {
    const [selected, setSelected] = useState(false);
    // const [ city, setCity] = useState('');
    const [reviews, setReviews] = useState('');
    const [location, setLocation] = useState('');
  
    const fetchReviews = (e) => { 
      e.preventDefault();
      fetch('https://travel-app-server.herokuapp.com/api/email/experience/', { 
        method: 'GET', 
        body: JSON.stringify({log: {location: location, reviews: reviews}}), 
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token 
        })
      }) .then((res) => res.json())
      .then((logData) => { 
        console.log(logData);
        setLocation(''); 
        setReviews('');  
        props.fetchReviews(); 
      })
    }

    useEffect(() => {
      fetchReviews();
    }, [])



// (selected) ?  (props.city) : <CitySelect/>

    return (
        <div className="App">
                  
          <ReviewCreate />
          <ReviewsTable />
    
        </div>
      );
    }
    
    export default Index;