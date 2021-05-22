import React from 'react';
import { BarChart, Bar, Legend } from 'recharts';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Paper, Grid } from "@material-ui/core"
import useStyles from './style'


const CustomTooltip = ({ active, payload, label, maxValue }) => {
    const classes = useStyles();
    if (active && payload && payload.length) {
        return (
            <Paper style={{ padding: '5px' }} className="custom-tooltip">
                <p className="label">{`${payload[0].value}g `}</p>
                <p className="label">{`max: ${maxValue}`}</p>
            </Paper>
        );
    }

    return null;
};

const BarChart1 = () => {
    const macrok = [
        { name: 'Zsír', value: 62 },
        { name: 'Szénhidrát', value: 134 },
        { name: 'Fehérje', value: 120 },
    ];
    const classes = useStyles();


    return (


        <div className={classes.root}>
            <Paper elevation={10}>
                <div style={{ paddingRight: 55, paddingTop: 50, paddingBottom: 40 }}>
                    <BarChart width={500} height={300} data={macrok}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip maxValue={180} />} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="value" fill="blue" barSize={100} />
                    </BarChart>
                </div>
            </Paper>


        </div>

    )
}

export default BarChart1;