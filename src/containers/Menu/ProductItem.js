import React from 'react';

import './ProductItem.css';

const productItem = props => (
    <article className="product-item">
        <div
            className="product-item__image"
            style={{ backgroundImage: "url('" + props.imageUrl + "')" }}
        />
        <div className="product-item__content">
        <h1>{props.title}</h1>
        <h2>${props.price}</h2>
        <p>{props.text}</p>
        </div>
    </article>
);

export default productItem;