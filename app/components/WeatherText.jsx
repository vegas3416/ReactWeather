var React = require('react');

var WeatherText = ({temp, location}) => {  
  return (
        <h3 className="text-center">It's {temp} in {location}</h3>
    )
};

module.exports = WeatherText;
