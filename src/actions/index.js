import axios from 'axios';

const API_KEY = 'a71b8ee73f169899c361814f3f38b53d';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?'

// Assigned variable to the string 'FETCH_WEATHER'
// Convention: make single variable that holds our action type and we use it in this file,
// and we will import this variable into our reducer as well,
// so we don't have to be referencing strings between files
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city)
{
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    // This makes a get request with url
    // This returns a promise
    // A promise doesn't actually contain any of our data
    const request = axios.get(url);
    
    // Redux promise is a middleware, which has the ability to stop
    // or manipulate any actions before they hit any reducers
    
    // Redux promise sees this incoming action, and looks at the payload property
    // If the payload is a promise, Redux promise stops the action entirely.
    // Then once the request finishes, it dispatches a new action of the same type,
    // but with a payload of the RESOLVED request.
    
    // In other words, it unwraps the promise for us
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}