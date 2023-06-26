import React from 'react';

const Contacts = ({ contacts, filter, onChange }) => {
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
              <li key={c.id}>{c.name}</li>
            ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default Contacts;
