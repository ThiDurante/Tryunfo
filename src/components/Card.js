import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,
      delBtn,
    } = this.props;
    const deleteButton = (
      <button
        className="delete-btn"
        data-testid="delete-button"
        type="button"
        onClick={ deleteCard }
        name={ cardName }
      >
        Excluir

      </button>);
    return (
      <section className="card">
        <p className="card-name" data-testid="name-card">{ cardName }</p>
        <img
          className="card-img"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p className="card-rarity" data-testid="attr1-card">
          { cardRare }
        </p>
        <p
          className="card-descrip"
          data-testid="description-card"
        >
          { cardDescription }

        </p>
        <p className="card-att" data-testid="attr1-card">
          <span>
            STR
          </span>
          ................................................
          <span>
            { cardAttr1 }

          </span>
        </p>
        <p className="card-att" data-testid="attr1-card">
          <span>
            AGI
          </span>
          ................................................
          <span>
            { cardAttr2 }

          </span>
        </p>
        <p className="card-att" data-testid="attr1-card">
          <span>
            KI
          </span>
          ................................................
          <span>
            { cardAttr3 }

          </span>
        </p>
        {
          // true e expressao = true
          cardTrunfo && <p className="super" data-testid="trunfo-card">Super Trunfo</p>
        }
        {
          !!delBtn
          && deleteButton
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  delBtn: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
