import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const trunfoLabel = (
      <label className="atrib" htmlFor="super">
        Super Trunfo
        <input
          className="checkbox"
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
      </label>);
    return (
      <form className="form">
        <section className="form-left">
          <label className="name" htmlFor="name">
            Name
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="name"
            />
          </label>
          <label className="descrip" htmlFor="description">
            Description
            <textarea
              maxLength="155"
              rows="6"
              cols="30"
              data-testid="description-input"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
              placeholder="description"
            />
          </label>
          <label className="atrib" htmlFor="atrib1">
            Strength
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              placeholder="atrib1"
            />
          </label>
          <label className="atrib" htmlFor="atrib2">
            Agility
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              placeholder="atrib2"
            />
          </label>
          <label className="atrib" htmlFor="atrib3">
            Ki
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              placeholder="atrib3"
            />
          </label>
          <label className="atrib" htmlFor="image">
            Image
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              placeholder="imagem"
            />
          </label>
          <label className="rare" htmlFor="rarity">
            Rarity
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          {
            !hasTrunfo
          && trunfoLabel
          }
          {
            hasTrunfo
          && <p className="hasTrunfo">Você já tem um Super Trunfo em seu baralho</p>
          }
          <button
            className="save-btn"
            data-testid="save-button"
            type="button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar

          </button>
        </section>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
