import React from 'react';

export default class ProductForm extends React.Component {
	render () {
		return (
			<div>
				<div className="row">
					<form className="col s12" action="http://localhost:3000/products" method="post">
						<div className="row">
							<div className="input-field col s6">
								<input type="text" name="name"/>
								<label>Product Name</label>
							</div>
							<div className="input-field col s6">
								<input type="date" className="datepicker" name="release_date"/>
							</div>
						</div>
						<input className="btn btn-primary btn-lg" type="submit"/>
					</form>
				</div>
			</div>
		)
	}
}
