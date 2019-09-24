// import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import ReviewIndex from '../reviews/ReviewIndex';
// import ReviewTable from '../reviews/ReviewsTable';
// // import ReviewCreate from './ReviewCreate';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const CitySelect = (props) => {
//   const [selectedCity,setSelectedCity] = useState('');
//   // const [value, setValues] = useState('');

//   const classes = useStyles();

//   const [value, setValues] = React.useState({

//     city: '',
//     name: 'hai',
//   });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);





//   function handleChange(event) {
//     setValues(oldValues => ({
//       ...oldValues,
//       [event.target.name]: event.target.value,
//     }));












//   }

//   return (
//     <div>

//     <form className={classes.root} autoComplete="off">
      
//       <FormControl variant="outlined" className={classes.formControl}>
//         <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
//           City
//         </InputLabel>
//         <Select
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//           labelWidth={labelWidth}
//           inputProps={{
//             name: 'age',
//             id: 'outlined-age-simple',
//           }}
//           >

//           <MenuItem value={'Prague'}> Prague </MenuItem>
//           <MenuItem value={'Hanoi'}> Hanoi </MenuItem>
//           <MenuItem value={'Tokyo'}> Tokyo </MenuItem>

//         </Select>
//       </FormControl>

//     </form>


//     {/* <ReviewIndex fetch={props.location} /> */}
    
  
//           {/* /* without the div, I get an error. In react we must enclose everything in the return.  */}
//     </div> 
//   );
// } 

// export default CitySelect
