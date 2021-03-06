import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
import styles from './Country.module.css'


const Countries = ({ handleCountryChange }) =>
{
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const fetchDataAPI = async () => {
            setCountries(await fetchCountries());
        };
        fetchDataAPI();

    }, []);
    
    return (<>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option  value="">United States</option>
                {countries.map((country, i) =>
                        <option key={i} value={country ==='Taiwan*' ? 'Taiwan' : country}>
                            {country ==='Taiwan*' ? 'Taiwan': country}
                        </option>
                )}
         </NativeSelect>
    </FormControl>
    </>)
}


export default Countries;