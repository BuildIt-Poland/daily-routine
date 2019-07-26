import truncate from 'lodash.truncate';

function trimQuote(quote) {
  return truncate(quote, {
    length: 220,
    separator: ' '
  });
}

export default trimQuote;
