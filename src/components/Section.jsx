import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section style={{ width: 500, margin: '30px auto' }}>
      {title ? <h3>{title}</h3> : ''}
      {children}
    </section>
  );
};

export default Section;
