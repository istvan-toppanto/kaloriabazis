import React from 'react'
import Button from '@material-ui/core/Button';
import useStyles from './style'
import LineChart1 from '../Charts/LineChart';
import BarChart1 from '../Charts/BarChart';
import { Grid } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root} container spacing={3}>
      </Grid>
      <Grid style={{ paddingTop: 120, paddingBottom: 100 }} align="center" >
        <div className={classes.root}>
          <Link to="/foodintake">
            <Button size="large" variant="outlined" color="primary">
              Írd be, hogy mit ettél!
      </Button>
          </Link>
        </div>
      </Grid>
      <Grid style={{ marginLeft: 50, paddingTop: 100 }} className={classes.root} container spacing={3}>
      </Grid >
      <Grid align="center" style={{ paddingTop: 0, marginLeft: 30, marginTop: 0, marginBottom: 100, marginRight: 100 }} className={classes.root} container spacing={3}>
        <Grid container item xs={6} align="left">
          <LineChart1></LineChart1>
        </Grid>
        <Grid container item xs={6} align="right">
          <BarChart1></BarChart1>
        </Grid>
      </Grid>
    </div >
  )


}

export default Main;
