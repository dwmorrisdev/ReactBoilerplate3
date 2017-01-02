var React = require('react');

var About = React.createClass({
  render: function () {
    return (
    	<div className="text-center holder">
    		<h2>About Section</h2>
    		<p>This app is built in React and was built as a proejct for React Course on Udemy. Built By Dustin Morris and completed on TBD.</p>
    		<p>Resources and credits:</p>
    		<ul>
    			<li><a href="https://facebook.github.io/react/">React</a></li>
    			<li><a href="http://foundation.zurb.com/">Foundation</a></li>
    			<li><a href="https://karma-runner.github.io/1.0/index.html">Karma Testing</a></li>
                <li><a href="https://subtlepatterns.com/">Subtle Patterns</a></li>
    			<li><a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">React Web Development Course</a></li>
    			<li><a href="www.designbysparticus.com">My Portfolio</a></li>
    			<li><a href="http://www.github.com/dwmorrisdev">My Github</a></li>
    		</ul>
    	</div>);
  }
});

module.exports = About;