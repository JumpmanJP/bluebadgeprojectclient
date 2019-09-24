import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal'
import Auth from '../auth/Auth'



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 440,
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  }


}));


const Sitebar = (props) => {
  const classes = useStyles();
  const [isOpen, setisOpen] = useState(false);

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
  
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {/* <Button color="inherit" type="button" onClick={handleOpen}>
        Sign UP/ Log IN 
      </Button>
        <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        >
        <div style={modalStyle} className={classes.paper}>
          <Auth />
        </div>
      </Modal> */}
          <Typography variant="h6" className={classes.title}>
            Wandur.EARTH
          </Typography>
          <Button  onClick={props.clickLogout} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Sitebar;