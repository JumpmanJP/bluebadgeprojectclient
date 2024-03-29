import React, {useState} from 'react';
import ReviewCreate from './ReviewCreate';
import ReviewsComponent from './ReviewsComponent';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const ReviewsTable = (props) => {
    const [selectedCity,setSelectedCity] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [token, setToken] = useState('');

    const [editUpdateReview, setEditUpdateReview] = useState('');
    const [updateOn, setUpdateOn] = useState('');
    // const [value, setValues] = useState('');
  
    const classes = useStyles();
  
    const [value, setValues] = React.useState({
  
      city: '',
      name: 'hai',
    });
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  

    // const [selected, setSelected] = useState(false);
    // const [ city, setCity] = useState('');
    const [reviews, setReviews] = useState([]);
    // I could not get my fetch results to render to the page without the array brackets in useState for reviews. I must use the empty array brackets to house my data to the page. The .map method could not work in ReviewsComponent becasue it was reading it as a string. When we console.logged it, it was a string. By giving it the array brackets, we allowed the .map method to run through the array.
    const [location, setLocation] = useState('');

    const fetchReviews = (e) => { 
        e.preventDefault();
        // console.log(e.target.value);
        let city = e.target.value
        console.log(props.token);
        fetch(`https://travel-app-server.herokuapp.com/experience/${city}`, { 
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token 
          })
        }) .then((res) => res.json())
        .then((logData) => { 
          console.log(logData);
          setReviews(logData);
          setLocation(''); 
        })
      }
  
    return (
      <div>
  
      <form className={classes.root} autoComplete="off">
        
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            City
          </InputLabel>
          <Select
            value={selectedCity}
            onChange={(e) => {setSelectedCity(e.target.value);fetchReviews(e);}}
            labelWidth={labelWidth}
            inputProps={{
              name: 'age',
              id: 'outlined-age-simple',
            }}
            >
  
            <MenuItem value='Prague'> Prague </MenuItem>
            <MenuItem value='Hanoi'> Hanoi </MenuItem>
            <MenuItem value='Tokyo'> Tokyo </MenuItem>
  
          </Select>
        </FormControl>
  
      </form>
  



        <ReviewsComponent token={props.token} fetchReviews={fetchReviews} reviewsTable={reviews} selectedCity={selectedCity} setReviews={setReviews} setLocation={setLocation} editUpdateReview={editUpdateReview} updateOn={updateOn}/>
        

      <ReviewCreate token={props.token} selectedCity={selectedCity}/>

      
      
    
            {/* /* without the div, I get an error. In react we must enclose everything in the return.  */}
      </div> 
    );
  } 
  
  export default ReviewsTable

  //At one point I was calling ReviewsTable in ReviewsComponent and ReviewsComponent in ReviewsTable. This created an infinate loop. KEEP YOUR JUNK ORGANIZED!
  