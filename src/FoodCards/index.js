import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './style'

const FoodCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card style={{ marginLeft: '' }} className={classes.card} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Levesek
              </Typography>
                    <Typography variant="h5" component="h2">
                        Mákos csirke
              </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Összetevők:
              </Typography>
                    <Typography variant="body2" component="p">
                        - Mák
                <br />
              - Csirke
            </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Megettem!</Button>
                </CardActions>
            </Card>
            <Card style={{ marginLeft: '' }} className={classes.card} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Levesek
              </Typography>
                    <Typography variant="h5" component="h2">
                        Mákos csirke
              </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Összetevők:
              </Typography>
                    <Typography variant="body2" component="p">
                        - Mák
                <br />
              - Csirke
            </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Megettem!</Button>
                </CardActions>
            </Card>
        </div>
    )



};

export default FoodCard;