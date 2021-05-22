import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Paper } from "@material-ui/core"
import useStyles from './style';

const LineChart1 = () => {
    const classes = useStyles();
    const data = [
        { datum: 1, suly: 90.0, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 2, suly: 90.4, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 3, suly: 90.1, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 4, suly: 89.9, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 5, suly: 89.2, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 6, suly: 88.9, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 7, suly: 88.0, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 8, suly: 87.7, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 9, suly: 87.1, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 10, suly: 86.9, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 11, suly: 86.3, upperLimit: 85.0, lowerLimit: 68.5 },
        { datum: 12, suly: 85.8, upperLimit: 85.0, lowerLimit: 68.5 },
    ];

    return (

        <Paper elevation={10}>
            <div className={classes.root} style={{ paddingRight: 55, paddingTop: 50, paddingBottom: 40 }}>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="suly" stroke="#8884d8" />
                    <Line type="monotone" dataKey="upperLimit" stroke="green" />
                    <Line type="monotone" dataKey="lowerLimit" stroke="red" />
                    <CartesianGrid stroke="lightgrey" />
                    <XAxis dataKey="datum" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </Paper>


    )
}

export default LineChart1;