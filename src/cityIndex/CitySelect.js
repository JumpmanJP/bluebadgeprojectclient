import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ReviewTable from '../reviews/ReviewsTable';
import ReviewCreate from './ReviewCreate';

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

function SimpleSelect() {
  // const [Prague, setPrague] = useState('');
  // const [Hanoi, setHanoi] = useState('');
  // const [Tokyo, setTokyo] = useState('');

  // const [selected, setSelected] = useState(false);
  // const [ city, setCity] = useState('');

  const classes = useStyles();
  const [values, setValues] = React.useState({

    city: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);





  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

  }

  return (
    <form className={classes.root} autoComplete="off">
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          City
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-simple',
          }}
        >

          <MenuItem value={10} > Prague </MenuItem>
          <MenuItem value={20} > Hanoi </MenuItem>
          <MenuItem value={30} > Tokyo </MenuItem>

        </Select>
      </FormControl>

    </form>
  );
} 

export default SimpleSelect
