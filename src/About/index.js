import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from '../Main/style';
import dailyIntake from './data';
import IntakeRow from '../IntakeRow/index'

const About = () => {
    const classes = useStyles();
    return (
        <Grid style={{ paddingLeft: 150, paddingRight: 0, paddingTop: 30 }} className={classes.root} container spacing={3}>
            {dailyIntake.map((value, index) =>

                <Fragment key={index}>
                    <Grid item xs={5} >{value.name}</Grid>
                    <Grid align="center" item xs={1} >{value.szenhidrat}</Grid >
                    <Grid align="center" item xs={1} >{value.zsir}</Grid >
                    <Grid align="center" item xs={1} >{value.feherje}</Grid >
                    <Grid align="center" item xs={1} >{value.kesztomeg}</Grid >
                    <Grid align="center" item xs={1} >{value.nyerstomeg}</Grid >
                </Fragment>
            )}
            <Grid>
                <IntakeRow></IntakeRow>
            </Grid>



        </Grid >
    )

};

export default About;