import React from 'react';
import { useTransition } from 'react-spring';
import { withRouter } from 'react-router-dom';

import { location } from '../../types';
import { THOUGHT, SPEECH } from '../../constants/speechBubbleVariant';
import { colorWhite } from '../../styles/designTokens';
import useBubble from './useBubble';
import Wrapper from './Wrapper';
import Bubble from './Bubble';
import Quote from './Quote';
import BubbleTail from './BubbleTail';
import BubbleButtons from './BubbleButtons';
import ErrorMessage from './ErrorMessage';

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

  return (
    <Wrapper>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <Bubble key={key} style={props}>
              {item.quote ? <Quote>{item.quote}</Quote> : <ErrorMessage>404 - Message not found</ErrorMessage>}
              <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
              {!item.isInDefaultPose && item.quote && <BubbleButtons quote={item.quote} />}
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
