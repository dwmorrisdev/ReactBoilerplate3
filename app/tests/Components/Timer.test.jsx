var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleStatusChange('started');

		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
		}, 1001);
	});

	it('should pause timer on paused status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 20})
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');

		expect(timer.state.count).toBe(20);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(20);
		}, 1001);
	});

	it('should clear timer on stopped status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 15})
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
		}, 1001);
	});
});