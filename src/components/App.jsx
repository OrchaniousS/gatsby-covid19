import React from 'react';

import { Cards, Countries, Chart } from '../components';
import { fetchDataCountry,fetchCountryCode } from '../api'
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    cc:{},
  };


  async componentDidMount() {
    const data = await fetchDataCountry();
    const cc = await fetchCountryCode();
    this.setState({ data, cc });
  }



  handleCountryChange = async (country) => {
    const data = await fetchDataCountry(country);

    this.setState({ data, country: country });
  }
  
  render() {
    const { data, country, cc} = this.state;
    return (
        <div className={styles.container}>
          <Cards data={data} country={country} cc={cc} />
          <Countries handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
     
    )
  }
}

export default App;
