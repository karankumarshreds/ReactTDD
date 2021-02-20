import React from 'react';

const ListItem = ({ title, description }) => {
    return (
        <div data-test="ListItem">
            <h1 data-test="title">{title}</h1>
            <p data-test="description">{description}</p>
        </div>
    );
};

export default ListItem;
