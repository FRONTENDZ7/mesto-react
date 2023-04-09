import React from 'react';

function Card(props) {
  function makeClick() {
    props.onCardClick(props.card);
  }
  function makeDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="cards__item">
      <button
        type="button"
        className="cards__delete"
        onClick={makeDelete}
        aria-label="Удалить"
      />
      <img
        src={props.link}
        className="cards__image"
        onClick={makeClick}
        alt={props.name}
      />
      <div className="cards__info">
        <h2 className="cards__description">{props.name}</h2>
        <div className="cards__like-area">
          <button type="button" className="cards__like" aria-label="Like" />
          <p className="cards__like-counter">
            {props.likeCount > 0 ? props.likeCount : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
