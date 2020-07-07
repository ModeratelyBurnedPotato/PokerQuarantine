import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: "none",
    height: "100%",
    
  }
});

export default function LightContainer(props) {
  /* A light variant of the <Paper> component*/
  const classes = useStyles();

  return (
    <Paper
      classes={{root: classes.root}}
      elevation={1 | props.elevation}
      style={props.style}
    >
      {props.children}
    </Paper>
  );
}