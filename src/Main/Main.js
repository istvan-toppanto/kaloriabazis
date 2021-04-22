import React from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from './style'


const Main = () => {
  const classes = useStyles();

 return <div>
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={3}>LOGO</Grid>
      <Grid item xs={9}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>spaceholder</Grid>
            <Grid item xs={3}>Login/Reg(G)</Grid>
            <Grid item xs={3}>Logout(G)</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={4}>Főoldal(G)</Grid>
            <Grid item xs={4}>Eszközök(G)</Grid>
            <Grid item xs={4}>Információ(G)</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Grid container spacing={3}>
          <Grid item xs={8}>spaceholder</Grid>
          <Grid item xs={4}>balnyil</Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={3}>
          <Grid item xs={8}>mai nap</Grid>
          <Grid item xs={4}>jobbnyil</Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={3}>jegyzet a naphoz</Grid>
            <Grid item xs={6}>spaceholder</Grid>
            <Grid item xs={3}>naptár</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
};

export default Main;
