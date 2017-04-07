import React, { Component } from 'react';

class GoogleMap extends Component
{
    // componentDidMount is invoked immediately after a component is mounted
    // We create an embedded Google Map inside of our document
    // Takes in a reference to a HTML element, and render the embedded map into it
    // Second argument is an options object
    // Zoom and center are google map options
    componentDidMount()
    {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render()
    {
        // ref (reference) allows you to get a direct reference
        // to a HTML element that has been rendered to the page
        // You can get a direct reference to this component with:
        // this.refs.map (which would give you a direct reference to
        //                this HTML elemnt)
        return <div ref="map" />
    }
}

export default GoogleMap;