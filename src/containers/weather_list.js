import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component
{
    // For each element cityData in our weather array,
    // renderWeather will take cityData in as the argument
    // and produce a list item for each element
    renderWeather(cityData)
    {
        const city_name = cityData.city.name;
     
        // weather argument: represents each element within the list
        // Therefore, to access the temperature, do: weather.main.temp
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);    
        
        // Find the coord object, grab the lon and lat properties off of it,
        // and assign them to two new variables called lon and lat
        const { lon, lat } = cityData.city.coord;
        
        // Whenever we have a list, we need to provide a unique key property
        // Rule behind adding a (unique) key in a React list
        // is that we add it to the top element of the list
        return (
            <tr key={city_name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="red" units="%" /></td>
            </tr>
        );
    }
    render()
    {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// mapStateToProps will give us access to this.props.weather in our WeatherList container
function mapStateToProps({ weather })
{
    // { weather } is ES6 syntax
    // It is identical to doing `const weather = state.weather`
    return { weather }; // { weather } == { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);