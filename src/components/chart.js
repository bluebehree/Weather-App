import _ from 'lodash'; // We use _ when importing lodash
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// Calculates the average
function average(data)
{
    return _.round(_.sum(data) / data.length);
}

// We refactored the Sparkline chart into a reusable component
export default (props) => {
    // data={props.data} : we will pass in the array as an argument
    // color={props.color} : we will pass in the color as an argument as well
    
    // SparklinesReferenceLine shows the average
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}