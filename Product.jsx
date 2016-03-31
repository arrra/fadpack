import React from 'react';

export default class Product extends React.Component {
	render() {
		return (
			<div>
        <li>{this.props.product.name}{" "}{this.props.product.release_date}</li>
			</div>
		);
	}
}

