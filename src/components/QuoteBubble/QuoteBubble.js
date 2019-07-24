import React from 'react';
import { useTransition } from 'react-spring';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash.truncate';

import { location } from '../../types';
import { THOUGHT, SPEECH } from '../../constants/speechBubbleVariant';
import { colorWhite } from '../../styles/designTokens';
import useBubble from './useBubble';
import Wrapper from './Wrapper';
import Bubble from './Bubble';
import Quote from './Quote';
import BubbleTail from './BubbleTail';
import BubbleButtons from './BubbleButtons';

// TODO handle Wrapper resize for big quotes @blurbyte

function QuoteBubble({ location }) {
  const { pathname } = location;
  const bubble = useBubble(pathname);

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

  function trimQuote(quote) {
    return truncate(quote, {
      length: 220,
      separator: ' '
    });
    // return quote.slice(0,225).trim().concat('...');
    return quote;
  }

  return (
    <Wrapper>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <Bubble key={key} style={props} default={item.isInDefaultPose}>
              <Quote default={item.isInDefaultPose}>
                {trimQuote(
                  `It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.`
                )}
              </Quote>
              <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
              {!item.isInDefaultPose && <BubbleButtons quote={item.quote} />}
            </Bubble>
          )
      )}
    </Wrapper>
  );
}

QuoteBubble.propTypes = {
  location: location.isRequired
};

export default withRouter(QuoteBubble);
