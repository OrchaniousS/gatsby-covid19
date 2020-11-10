import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import TodayIcon from '@material-ui/icons/Today';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle,iconClassName }) => {

  return (
    <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
      <CardContent className={styles.cardContent}>
          <CardHeader
            title={cardTitle}
            subheader={
               <Typography variant="h5" component="h2">
               <CountUp start={0} end={value} duration={2.75} separator="," />
              </Typography>
            }
            avatar={
            <Avatar>
              {iconClassName}
              </Avatar> 
            }
          >
          </CardHeader>
        <Typography className={styles.cardTypho} variant="body2" component="p">
          {cardSubtitle}
        </Typography>
        <Typography variant="body1" align='center' gutterBottom className={styles.cardTypho} color="textSecondary">
        <TodayIcon  style={{ color: grey[700] }}/>
        {lastUpdate}
        </Typography>
      </CardContent>
    </Grid>)
};

export default CardComponent;