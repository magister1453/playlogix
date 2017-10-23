'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {watches: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/watches'}).done(response => {
			this.setState({watches: response.entity._embedded.watches});
		});
	}

	render() {
		return (
			<WatchList watches={this.state.watches}/>
		)
	}
}

class WatchList extends React.Component{
	render() {
		var watches = this.props.watches.map(watch =>
			<Watch key={watch._links.self.href} watch={watch}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Warranty</th>
					</tr>
					{watches}
				</tbody>
			</table>
		)
	}
}

class Watch extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.watch.name}</td>
				<td>R{this.props.watch.price}</td>
				<td>{this.props.watch.warranty}yr(s)</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)


