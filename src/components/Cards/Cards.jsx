import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data:{global, date}}) => {
    if(!global)
        return 'Loading...';
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary">Total Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.TotalConfirmed} duration={2.0} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">New Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.NewConfirmed} duration={2.0} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary">Total Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.TotalRecovered} duration={2.0} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">New Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.NewRecovered} duration={2.0} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary">Total Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.TotalDeaths} duration={2.0} seperator=","/>    
                        </Typography>
                        <Typography color="textSecondary">New Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={global.NewDeaths} duration={2.0} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;