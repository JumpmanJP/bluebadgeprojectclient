import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import './Auth.css'



const Auth = (props) => {
  let[login, setLogin ] = useState(true);
  let[ email, setEmail ] = useState('');
  let[ password, setPassword ] = useState('');
  let [giver, setGiver] = useState('');
  let [seeker, setSeeker] = useState('');

  let [locationOfExperience, setLocationOfExperience] = useState('');
  let [ownerOfExperience, setOwnerOfExperience] = useState('');
  let [reviewsOfExperience, setReviewsOfExperience] = useState('');
  let [likesOfExperience, setLikesOfExperience] = useState('');



  let changeLogin = (e) => {
      e.preventDefault();
      setLogin(!login);

      setEmail('');
      setPassword('');

  }

  let handleSubmit = (event) => {
      event.preventDefault();
      let url = login ? 'https://travel-app-server.herokuapp.com/auth/Login' : 'https://travel-app-server.herokuapp.com/auth/Signup'

      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body:JSON.stringify({
              locationOfExperience: locationOfExperience,
              ownerOfExperience: ownerOfExperience,
              reviewsOfExperience: reviewsOfExperience,
              likesOfExperience: likesOfExperience
          })
      }).then( res => res.json())
      .then(data => {
          props.tokenHandler(data.sessionToken)
      })
  }



  return(
      <form className="card-like">
          <h1>{ login ? 'Log In' : 'Sign up' }</h1>
          <label className="display-block" htmlFor="email:"> Email: </label>
          <input className="display-block" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="display-block" htmlFor="password"> Password: </label>
          <input className="display-block" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      {    
          login ? null :
              <React.Fragment> 
                  <label className="display-block" htmlFor="email"> Email: </label>
                  <input className="display-block" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label className="display-block" htmlFor="password">Password:</label>
                  <input className="display-block" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label className="display-block" htmlFor="experienceseeker"> Experience Seeker: </label>
                  <input className="display-block" type="checkbox" name="isseeker" value={setSeeker} onChange={(e) => setSeeker(e.target.value)} />
                  <label className="display-block" htmlFor="experiencegiver"> Experience Giver: </label>
                  <input className="display-block" type="checkbox" name="isgiver" value={setGiver} onChange={(e) => setGiver(e.target.value)} />
              </React.Fragment>
      }
          <button onClick={(e) => changeLogin(e)}>{ login ? 'Sign Up' : 'Log In'}</button>

          <button type="submit" onClick={(e) => handleSubmit(e)}> Submit </button>

                {/* <Auth updateToken={updateToken} /> */}

      </form>
  )
}
















// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom';


// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }));


// //Imported some grids from materials ui.

// const Auth = (props) => { 
//     const [spacing, setSpacing] = React.useState(2);
//     const classes = useStyles();




//   return(
    
//       <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//             <Grid  item>

//             <Login  updateToken={props.updateToken}/>


//             </Grid>
//             <Grid  item>

//             <Signup  updateToken={props.updateToken}/>



//             </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
  
// }

export default Auth;