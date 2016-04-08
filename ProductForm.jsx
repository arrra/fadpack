import React from 'react';
import $ from 'jquery';

const url = "http://localhost:3000/products";

export default class ProductForm extends React.Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

	render () {
		return (
			<div>
				<div className="row">
					<form className="col s12"  onSubmit={this._handleSubmit} >
						<div className="row">
							<div className="input-field col s6">
                <input
                  type="text"
                  name='name'
                  ref={node => this._nameInput = node}
                />
								<label>Product Name</label>
							</div>
							<div className="input-field col s6">
                <input
                  type="date"
                  className="datepicker"
                  name="release_date"
                  ref= {node => this._releaseDateInput = node}
                />
							</div>
							<div className="input-field col s6">
                <input
                  type="text"
                  name="content_link"
                  ref= {node => this._linkInput = node}
                />
								<label>Content Link</label>
							</div>
						</div>
            <input
              className="btn btn-primary btn-lg" 
              type="submit"
            />
					</form>
				</div>
			</div>
		)
	}

  _handleSubmit (event) {
    event.preventDefault();
    let product = {};
    product.name = this._nameInput.value;
    product.release_date = this._releaseDateInput.value;
    product.content_link = this._linkInput.value;
    $.ajax({
      url: url,
      type: 'POST',
      data: product,
      success: () => {
        this.props.onProductAdded(product);
      }
    })
  }
}
