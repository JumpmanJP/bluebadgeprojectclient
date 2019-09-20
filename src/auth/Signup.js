import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isSeeker, setSeeker] = useState(false);
  const [isGiver, setGiver] = useState(false);



const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://travel-app-server.herokuapp.com/api/email", {
        method: 'POST',
        body: JSON.stringify({ user: { email: email, password: password }}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
}




  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit} >
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/> 
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/> 
        </FormGroup>
        <FormGroup>
          <Label >
              <isSeeker htmlFor="isSeeker">Experience Seeker</isSeeker> 
          </Label>
          <Input type="checkbox" value={true} onCheck={(e) => setSeeker(!isSeeker)}/> 
        </FormGroup>
        <FormGroup>
          <Label >
              <isGiver htmlFor="isGiver">Experience Giver</isGiver>
          </Label>
          <Input type="checkbox" value={true} onCheck={(e) => setGiver(!isGiver)}/> 
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  )
}


export default Signup;