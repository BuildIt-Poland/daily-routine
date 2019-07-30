import React, { useContext } from 'react';
import { useTransition } from 'react-spring';
import { withRouter } from 'react-router-dom';

import { location } from '../../types';
import { THOUGHT, SPEECH } from '../../constants/speechBubbleVariant';
import { colorWhite } from '../../styles/designTokens';
import { QuoteContext } from '../../context/QuoteContext';
import ErrorBoundary from '../ErrorBoundary';
import trimQuote from './trimQuote';
import useBubble from './useBubble';
import Wrapper from './Wrapper';
import Bubble from './Bubble';
import Quote from './Quote';
import BubbleTail from './BubbleTail';
import BubbleButtons from './BubbleButtons';

const ERROR_MESSAGE =
  ' – The blockchain distributed ledger failed to achieve quorum with deep learning neural network of your pseudo-generated Turning complaisant daily message.';

function QuoteBubble({ location, ...props }) {
  const { pathname } = location;
  const { handleQuoteChange } = useContext(QuoteContext);

  const bubble = useBubble(pathname);
  // Puts quote into context
  handleQuoteChange(bubble.quote);

  const transitions = useTransition(bubble, bubble => bubble.quoteID, {
    from: { opacity: 0, transform: 'perspective(600px) rotateX(45deg) translateY(-20px) scale(0.8)' },
    enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg) translateY(0) scaleY(1)' },
    leave: {
      opacity: 0,
      transform: 'perspective(600px) rotateX(0deg) translateY(-30px) scale(0.6)',
      color: colorWhite
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 14
    },
    delay: 200
  });

  return (
    <ErrorBoundary>
      <Wrapper {...props}>
        {transitions.map(
          ({ item, props, key }) =>
            item && (
              <Bubble key={key} style={props}>
                {item.quote ? (
                  <Quote>{trimQuote(item.quote)}</Quote>
                ) : (
                  <Quote error>
                    <strong>4o4 Error</strong>
                    {ERROR_MESSAGE}
                  </Quote>
                )}

                <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
                {!item.isInDefaultPose && item.quote && <BubbleButtons quote={item.quote} />}
              </Bubble>
            )
        )}
      </Wrapper>
    </ErrorBoundary>
  );
}

QuoteBubble.propTypes = {
  location: location.isRequired
};

export default withRouter(QuoteBubble);
