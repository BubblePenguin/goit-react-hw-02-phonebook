import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, filter, onChange, onDelete }) => {
  return (
    <>
      <p>Find someone:</p>
      <input type="text" onChange={onChange} name="filter" />

      {contacts ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contacts
            .filter(n =>
              filter
                ? n.name.toLowerCase().includes(filter.toLowerCase())
                : true
            )
            .map(c => (
              <li key={c.id}>
                <span>
                  {c.name}: {c.number}
                </span>{' '}
                <button onClick={onDelete}>delete</button>
              </li>
            ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  filter: PropTypes.string,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Contacts;
