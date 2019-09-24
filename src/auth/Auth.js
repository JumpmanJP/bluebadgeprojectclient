import React, {useState} from 'react';
// import Login from './Login';
// import Signup from './Signup';
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
      let url = login ? 'https://travel-app-server.herokuapp.com/api/email/signin' : 'https://travel-app-server.herokuapp.com/api/email/createuser'
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body:JSON.stringify({user:{
            email: email,
            password: password,
            experiencegiver: true,
            experienceseeker: true,
          }
        
          })
      }).then( res => res.json())
      .then(data => {
          console.log(data.sessionToken)
          props.updateToken(data.sessionToken)
      })
  }



  return(
      <form onSubmit={(e)=>handleSubmit(e)}className="card-like">
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

          <button type="submit" > Submit </button>

                {/* <Auth updateToken={updateToken} /> */}

      </form>
  )
}





export default Auth;