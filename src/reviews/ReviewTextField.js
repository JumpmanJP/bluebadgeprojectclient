import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReviewTFsubmitButton from './ReviewTFsubmitButton';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },

}));




export default function OutlinedTextFields() {

  const classes = useStyles();
  const [review, setReview] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setReview({ ...review, [name]: event.target.review });
  };




return (
<form className={classes.container} noValidate autoComplete="off">

<TextField
        id="outlined-multiline-static"
        label="Review Here"
        multiline
        rows="4"
        fullWidth
        defaultValue="Review Here"
        className={classes.textField}
        margin="normal"
        variant="outlined"
/>
      <label htmlFor="Review" />
      <input name="review" value={review} onChange={(e) => setReview(e.target.value)} />
    

<br/>
<ReviewTFsubmitButton />
</form>



  );
}