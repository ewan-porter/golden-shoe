import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import 'hover.css'

const styles = () => ({
  root: {
    color: '#1f1f1f',
    backgroundColor: '#e6ce1d',
    '&:hover' : {
      backgroundColor: '#fdec00',
    }
  } 

  
});

function CustomButton(props) {
  return <Button variant="contained" color="primary" className="hvr-grownp" {...props} />;
}

export default withStyles(styles)(CustomButton);