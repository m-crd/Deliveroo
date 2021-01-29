import React from 'react';

const Restaurant = props => {
  const { name, description, cover } = props;

  return (
    <div>
      <div className="Restaurant_center">
        <div className="Restaurant_texts">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img className="Restaurant_cover" src={cover} alt="cover" />
      </div>
    </div>
  );
};

export default Restaurant;
