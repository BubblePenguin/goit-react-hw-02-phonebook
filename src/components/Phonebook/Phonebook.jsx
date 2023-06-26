import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  static defaultProps = {
    onSubmit: e => e.preventDefault(),
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.string,
  };

  render() {
    const { onSubmit, onChange, name, number } = this.props;
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',

          border: '1px solid black',
          padding: 10,
          borderRadius: 3,
        }}
        onSubmit={onSubmit}
      >
        <label>Name</label>
        <input
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Number
        <input
          onChange={onChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <input
          type="submit"
          style={{ margin: '15px 0 0 0' }}
          value={'Add Contact'}
        />
      </form>
    );
  }
}

export default Phonebook;
