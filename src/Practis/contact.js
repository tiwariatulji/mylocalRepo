import React, { Component } from 'react';


class ContactForm extends Component {

	submitForm (e) {
		e.preventDefault()
		this.props.history.push('/thank-you');
	}

	render() {
		return (
			<div>
				<h1>

			hello India
				</h1>
				<form onSubmit={this.submitForm.bind(this)}>
					<button type="submit">Submit</button>
				</form>
			</div>
		)

	}
}
export default ContactForm;