import React from 'react';

const ListItem = ({ title, description }) => {
    return (
        <div data-test="ListItem">
            <h5 data-test="title">{title}</h5>
            <p data-test="description">{description}</p>
        </div>
    );
};

export default ListItem;
