import React from 'react';
import $ from 'jquery';

const url = "http://localhost:3000/contents";

export default class ContentForm extends React.Component {
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
                  name='product_id'
                  ref={node => this._productIdInput = node}
                />
								<label>Product Name</label>
							</div>
							<div className="input-field col s6">
                <input
                  type="text"
                  name='source'
                  ref={node => this._source = node}
                />
								<label>Product Name</label>
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
    let content = {};
    content.productId = this._productIdInput.value;
    content.source = this._source.value;
    $.ajax({
      url: url,
      type: 'POST',
      data: content,
      success: () => {
      }
    })
  }
}
