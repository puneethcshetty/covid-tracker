import React from 'react';
import CountUp from 'react-countup';
import styles from './Chart.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import cx from 'classnames';

const Chart = ({data:{countries}}) => {
    if(!countries)
        return 'Loading...';
    countries.sort((a,b) => {return b.TotalConfirmed - a.TotalConfirmed})
    return(
        <div className={styles.container}> 
            <Grid container spacing={3} justify='center'>
                {countries.map( country => {
                return(<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.country)}>
                    <CardContent>
                        <Typography variant="h5">{country.Country}</Typography>
                        <Typography color="textSecondary">Total Confirmed: <CountUp start={0} end={country.TotalConfirmed} duration={2.0} seperator=","/></Typography>
                        <Typography color="textSecondary">New Confirmed: <CountUp start={0} end={country.NewConfirmed} duration={2.0} seperator=","/></Typography>
                    </CardContent>
                </Grid>)
                })}
            </Grid>
        </div>
    )
}

export default Chart;