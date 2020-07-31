import React from 'react';
import { Cards, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {
    state = {
        data: {},
        countries: {}
    }
    async componentDidMount() {
        const {global, countries, date} =  await fetchData();
        this.setState({data: {global,date}, countries: {countries}})
    }

    render() {
        const { data, countries } =  this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart data={countries}/>
            </div>
        )
    }
}

export default App;