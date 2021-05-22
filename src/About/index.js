import Grid from '@material-ui/core/Grid';
import useStyles from '../Main/style';
import dailyIntake from './data';
import IntakeTable from '../IntakeTable'

const About = () => {
    const classes = useStyles();
    return (
        <Grid style={{ paddingLeft: 150, paddingRight: 0, paddingTop: 30 }} className={classes.root} container spacing={3}>
            <IntakeTable intakeData={dailyIntake}></IntakeTable>
        </Grid >
    )

};

export default About;