import React, {useState} from 'react';
import ReviewCreate from './ReviewCreate';
// import ReviewsComponent from './ReviewsComponent';
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
    const [reviews, setReviews] = useState('');
    const [location, setLocation] = useState('');

    const fetchReviews = (e) => { 
        e.preventDefault();
        console.log(e.target.value);
        let city= e.target.value
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
  
      // (reviews === ) ?




    function handleChange(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
  
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
            onChange={(e) => fetchReviews(e)}
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
  
      <ReviewCreate />
          {/* <ReviewsComponent  fetchReviews={fetchReviews} reviewCreate={reviews}/> */}

      {/* <ReviewIndex fetch={props.location} /> */}
      
    
            {/* /* without the div, I get an error. In react we must enclose everything in the return.  */}
      </div> 
    );
  } 
  
  export default ReviewsTable
  