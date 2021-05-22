import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TuneIcon from '@material-ui/icons/Tune';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import useStyles from './style';



const Header = () => {
    const classes = useStyles();
    return (


        <Grid style={{ paddingLeft: 30, paddingRight: 80, paddingTop: 30 }} className={classes.root} container spacing={3}>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/">
                    <Tooltip title="Vissza a Főoldalra" enterDelay={50} leaveDelay={1000}>
                        <Paper>
                            <IconButton size="medium" color="primary" aria-label="Vissza a Főoldalra">
                                <HomeIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>

            </Grid>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/users">
                    <Tooltip title="Adataid megadása, Cél beállítása" enterDelay={50} leaveDelay={1000}>
                        <Paper>
                            <IconButton size="medium" color="primary" aria-label="Információ">
                                <TuneIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>
            </Grid>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/about">
                    <Tooltip title="Információ az oldalról" enterDelay={50} leaveDelay={1000}>
                        <Paper>
                            <IconButton size="medium" color="primary" aria-label="Cél értékek beállítása">
                                <InfoIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>
            </Grid>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/notifications">
                    <Tooltip title="Értesítések" enterDelay={50} leaveDelay={1000}>
                        <Paper elevation={1}>
                            <IconButton size="medium" color="primary" aria-label="Értesítések helye">
                                <NotificationsIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>
            </Grid>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/account">
                    <Tooltip title="Felhasználói fiók" enterDelay={50} leaveDelay={1000}>
                        <Paper>
                            <IconButton size="medium" color="primary" aria-label="Felhasználói Fiók">
                                <AccountCircleIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>
            </Grid>
            <Grid style={{}} item xs={2} align="center">
                <Link to="/settings">
                    <Tooltip title="Beállítások" enterDelay={50} leaveDelay={1000}>
                        <Paper>
                            <IconButton size="medium" color="primary" aria-label="Beállítások">
                                <SettingsIcon />
                            </IconButton>
                        </Paper>
                    </Tooltip>
                </Link>
            </Grid>
        </Grid >
    )
}

export default Header