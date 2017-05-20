var React = require('react');

var WeatherText = ({temp, location}) => {  
  return (
        <h3>It's {temp} in {location}</h3>
    )
};

module.exports = WeatherText;
