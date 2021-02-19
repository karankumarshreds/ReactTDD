import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ title, description }) => {
  return (
    <div className="container mt-5" data-test="Headline">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Headline;
