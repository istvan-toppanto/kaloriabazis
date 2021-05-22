// Étel bevitele + Naptár
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './style'
import { Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper"
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const FoodIntake = () => {
    const classes = useStyles();
    return (
        <Grid xs={11} align="center"
            style={{ backgroundColor: '', paddingTop: 100, paddingBottom: 50, paddingLeft: 0, marginLeft: 30, marginRight: 0 }}
            className={classes.root} container spacing={3}>
            <Grid item xs={6} style={{ backgroundColor: '' }} >

                <TextField style={{ paddingRight: 0 }}
                    id="outlined-helperText"
                    label="Mit ettél?"
                    defaultValue=""
                    helperText="Írd be, vagy válaszd ki alul"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6} style={{ backgroundColor: '', paddingRight: 30 }}>

                <form className={classes.container} noValidate>
                    <TextField style={{ marginLeft: 100, marginBottom: 0 }}
                        id="date"
                        label="Válaszd ki a napot!"
                        type="date"
                        defaultValue="2021-05-10"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>

            </Grid>

            <Grid xs={11} align="center"
                style={{ backgroundColor: '', paddingTop: 50, paddingBottom: 0, paddingLeft: 0, marginLeft: 30, marginRight: 0 }}
                className={classes.root} container spacing={3}>
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip variant="outlined" color="primary" label='Mákos Csirke' />
                <Chip
                    avatar={<Icon className="fa fa-plus-circle" style={{ fontSize: 30 }} />}
                    label="Új étel hozzáadása"
                    variant="outlined"
                />
            </Grid>
            <Grid xs={11} align="center"
                style={{ backgroundColor: '', paddingTop: 50, paddingBottom: 0, paddingLeft: 0, marginLeft: 30, marginRight: 0 }}
                className={classes.root} container spacing={3}>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Grid>
        </Grid>




    )
}

export default FoodIntake;