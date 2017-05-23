var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
     <div>
      <h1 className="text-centered">About</h1>
      <p>
      	First React app. Its crude and not great but it is a starting point 
      	 for me. Lets hope I can get better at all this CSS, HTML, and React stuff because as of right now I'm 
      	 pretty new to all of it!!
      </p>
      <p>
      	Here are some of the tools I used.
      </p>
      <li>
      	<a href="https://github.com/vegas3416/ReactWeather">GitHub</a> - This is github repository for app.   
      </li>
    </div>
  )
};

module.exports = About;
