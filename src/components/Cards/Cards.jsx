import React,{useEffect} from 'react';
import { Typography, Grid } from '@material-ui/core';
import { green, red, purple } from '@material-ui/core/colors';
import { loadCSS } from 'fg-loadcss';

import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, date, }, country, cc }) => {
  
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, [])

  if (!confirmed) {
    return (<div>
      Loading
      <CircularProgress />
    </div>)
  }
    
  return (
    <div className={styles.container}>
    <Typography  variant="h5" component="h2" id={styles.country} className={styles.country}>
        {
          country ? cc.map(({ code, name }) =>
          country === name || country === code ?
          <React.Fragment key={code}>
              <img
                src={`https://flagcdn.com/28x21/${code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/56x42/${code.toLowerCase()}.png 2x,
                          https://flagcdn.com/84x63${code.toLowerCase()}.png 3x`}
                width="28"
                height="21"
                  alt={name} />
                {' '}
            {name}
          </React.Fragment> : null
        ) :
          <>
            <img
              src="https://flagcdn.com/28x21/us.png"
              srcSet="https://flagcdn.com/56x42/us.png 2x,
                https://flagcdn.com/84x63/us.png 3x"
                width="28"
                height="21"
              alt="United States"/>
               {' '}United States
              </>
        }
   </Typography>
          <Grid container spacing={3} justify="center">
          <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed}
          lastUpdate={date}
              cardSubtitle="Number of active cases from COVID-19."
              iconClassName={<Icon className="fa fa-biohazard" style={{ color: purple[600] }} />}
            />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered}
          lastUpdate={date}
          cardSubtitle="Number of recoveries from COVID-19."
          iconClassName={<Icon className="fa fa-plus-circle" style={{ color: green[500] }} />}
            /> 
        <CardComponent
              className={styles.deaths}
              cardTitle="Deaths"
              value={deaths}
              lastUpdate={date}
              cardSubtitle="Number of deaths caused by COVID-19."
              iconClassName={<Icon className="fa fa-procedures" style={{ color: red[500] }} />}
        />
          </Grid>
        </div>
  );
}

export default Cards;