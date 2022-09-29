import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import presetCards from './components/Cardsarray';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  cards: presetCards,
  searchNameValue: '',
  searchRarityValue: '',
  trunfoFilterCheck: false,
  disableSearch: false,
};

class App extends React.Component {
  state = { ...stateInicial };

  handleButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const limit = 90;
    const zero = 0;
    const sumLimit = 270;
    return !(
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && +cardAttr1 <= limit
      && +cardAttr2 <= limit
      && +cardAttr3 <= limit
      && +cardAttr1 >= zero
      && +cardAttr2 >= zero
      && +cardAttr3 >= zero
      && +cardAttr1 + +cardAttr2 + +cardAttr3 <= sumLimit
    );
  };

  handleInputChange = (evt) => {
    // console.log(evt, evt.value);
    const { name, value, checked, type } = evt.target;
    // const savebtn = this.handleButtonClick();
    if (type === 'checkbox') {
      this.setState({ cardTrunfo: checked });
    } else {
      this.setState({ [name]: value }, () => (this.handleButtonClick()
        ? this.setState({ isSaveButtonDisabled: true })
        : this.setState({ isSaveButtonDisabled: false })));
    }
  };

  handleSaveButton = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    const trunfo = hasTrunfo ? true : cardTrunfo;
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: 'normal',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        hasTrunfo: trunfo,
        cardTrunfo: false,
      });
    });
  };

  deleteCard = (e) => {
    const { cards } = this.state;
    console.log(e.target);
    const result = cards.filter((card) => card.cardName !== e.target.name);
    const trunfo = result.every((card) => card.cardTrunfo === false);
    if (trunfo) {
      this.setState({ cards: result, hasTrunfo: false });
    } else {
      this.setState({ cards: result });
    }
  };

  nameSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchNameValue: value });
    // const { cards } = this.state;
    // const result = cards.filter((card) => card.cardName === value);
    // this.setState({ cards: result });
  };

  raritySearch = (e) => {
    const { value } = e.target;
    this.setState({ searchRarityValue: value === 'todas' ? '' : value });
    console.log(value);
  };

  trunfoSearch = (e) => {
    const { checked } = e.target;
    return checked
      ? this.setState({ trunfoFilterCheck: checked, disableSearch: true })
      : this.setState({ trunfoFilterCheck: checked, disableSearch: false });
  };

  render() {
    const { cards,
      searchNameValue,
      searchRarityValue,
      trunfoFilterCheck,
      disableSearch } = this.state;
    // console.log(searchNameValue);
    return (
      <div className="all">
        <h1>Tryunfo</h1>
        <section className="add-card">
          <Form
            { ... this.state }
            onInputChange={ this.handleInputChange }
            onSaveButtonClick={ this.handleSaveButton }
            handleSaveButton={ this.handleSaveButton }
          />
          <Card { ... this.state } deleteCard={ this.deleteCard } delBtn={ false } />
        </section>
        <h1>Filtro</h1>
        <section className="filter">
          <label className="filter-input" htmlFor="super">
            Name
            <input
              data-testid="name-filter"
              name="name"
              onChange={ this.nameSearch }
              disabled={ disableSearch }
            />
          </label>
          <label className="filter-select" htmlFor="rarity">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-filter"
              onChange={ this.raritySearch }
              disabled={ disableSearch }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label className="filter-trunfo" htmlFor="super">
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-filter"
              onChange={ this.trunfoSearch }
            />
          </label>
        </section>
        <section className="all-cards">
          {
            cards
              .filter((card) => (trunfoFilterCheck
                ? card.cardTrunfo === true
                : card.cardName.includes(searchNameValue)
             && card.cardRare.startsWith(searchRarityValue)))
              .map((card) => (<Card
                { ... card }
                key={ card.cardName }
                delBtn
                deleteCard={ this.deleteCard }
              />))
          }
        </section>
      </div>
    );
  }
}

export default App;
