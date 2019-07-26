import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const QuoteContext = createContext();
const { Provider } = QuoteContext;

function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);

  const handleQuoteChange = quote => setQuote(quote);

  return <Provider value={{ quote, handleQuoteChange }}>{children}</Provider>;
}

QuoteProvider.propTypes = {
  children: PropTypes.node
};

export { QuoteContext, QuoteProvider };
