import React, {useState, useEffect} from 'react';
import './App.css';
import SiteBar from './home/Sitebar';
import Auth from './auth/Auth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReviewIndex from './reviews/ReviewIndex';
// import ReviewTextField from './reviews/ReviewTextField';
import CityIndex from './cityIndex/CityIndex';
import ReviewsTable from './reviews/ReviewsTable';


function App() {
  const [sessionToken, setSessionToken] = useState('');


  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  },[])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  //Adding logout function
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <ReviewIndex token={sessionToken}/>
  //   : <Auth updateToken={updateToken}/>)
  //  }


  return (
    <div className="App">
      
      <SiteBar clickLogout={clearToken} />
      {/* {protectedViews()} */}
      <br></br>
      {(sessionToken === localStorage.getItem('token')) ? <ReviewsTable token={sessionToken}/> : <Auth updateToken={updateToken} />}
      

    </div>
  );
}

export default App;
