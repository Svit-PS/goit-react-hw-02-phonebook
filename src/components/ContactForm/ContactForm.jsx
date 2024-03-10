import React, { Component } from 'react';
import { FormSt, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm({
      name: this.state.name,
      number: this.state.number,
    });
  };

  render() {
    return (
      <>
        <FormSt onSubmit={this.handleSubmit}>
          <Label htmlFor="nameId">
            Name
            <input
              type="text"
              name="name"
              id="nameId"
              required
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Name Surname"
            />
          </Label>
          <Label htmlFor="numberId">
            Number
            <input
              type="tel"
              name="number"
              id="numberId"
              required
              onChange={this.handleChange}
              value={this.state.number}
              placeholder="999-99-99"
            />
          </Label>
          <button type="submit">Add contact</button>
        </FormSt>
      </>
    );
  }
}

export default ContactForm;