import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { term: '' };
        // Take the existing function, bind it to this,
        // and then replace the existing function with it
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    // All DOM event handlers (onChange, onClick, onHover, onScroll) all come along with an event object
    onInputChange(event)
    {
        // Whenever we hand a callback function around,
        // and the callback function references `this`,
        // it will have an incorrect context
        // Thus, we need to bind the context in our constructor
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event)
    {
        event.preventDefault(); // This tells the browser not to submit the form
        
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        // Clears the input value
        this.setState({ term: '' });
    }
    render()
    {
        // When you press enter on your keyboard with a form element child
        // (in our case, the input and the button), the browser automatically
        // thinks that you're trying to submit the contents of the form,
        // and it makes a POST request
        
        // We want to prevent this behavior by adding an event handler to the form element itself
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Get a five-day forecast in any city" className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Whenever we are passing in a function that is supposed to map our dispatch to the props of our container,
// it always goes in the second argument
// By passing in null for the first argument, we are saying that we understand the Redux is maintaining some state,
// but this container does not care about it at all
export default connect(null, mapDispatchToProps)(SearchBar);