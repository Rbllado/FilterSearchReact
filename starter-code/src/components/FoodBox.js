import React from "react";

const FoodBox = props => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories}cal</small>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
