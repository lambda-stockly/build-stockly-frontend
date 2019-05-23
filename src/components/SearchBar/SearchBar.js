import React from 'react';
import './SearchBar.scss';
import Autosuggest from 'react-autosuggest';
import data from './data';
import StockInfo from '../StockInfo';
import StockChart from '../StockChart';
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(
        datum => datum.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>{suggestion.name}</div>
    <div>{suggestion.symbol}</div>
  </div>
);

class SearchBar extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      selection: {
        symbol: '',
        name: ''
      }
    };
  }
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = suggestion => {
    this.setState({
      selection: {
        symbol: suggestion.symbol,
        name: suggestion.name
      }
    });
    return `${suggestion.symbol}, ${suggestion.name}`;
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, selection } = this.state;
    const { symbol, name } = selection;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for company by name',
      value,
      onChange: this.onChange,
      type: 'search'
    };

    // Finally, render it!
    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <div className="stock-info-stock-chart">
          {this.state.selection.name && (
            <StockInfo symbol={symbol} name={name} />
          )}
          {this.state.selection.name && <StockChart symbol={symbol} />}
        </div>
      </div>
    );
  }
}

export default SearchBar;
