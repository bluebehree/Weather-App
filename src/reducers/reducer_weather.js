import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action)
{
    switch(action.type)
    {
        // Take our current state (our current list of cities)
        // and add this new city (action.payload.data) to it
            
        // concat does not change the existing array
        // It creates a new array that contains all the old stuff and the new stuff
            
        // Reminder: DO NOT modify your redux state unless you use .setState
        case FETCH_WEATHER:
//          return state.concat([ action.payload.data ]);   // Returning a new version of our state
            return [ action.payload.data, ...state ];   // Take a new array, and put
                                                        // action.payload.data inside of it, and then
                                                        // take this other variable, which because of
                                                        // the `...`, says that it might be an array,
                                                        // so take all the entries in it and insert it
                                                        // into the outside array
                                                        // Looks like [city, city, city]
    }
    return state;
}