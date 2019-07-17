import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import { withRouter } from 'react-router-dom';

import extractRoleFromPath from '../../utils/extractRoleFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import { getQuote } from '../../utils/quotesService';
import { location } from '../../types';
import { THOUGHT, SPEECH } from '../../constants/speechBubbleVariant';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Bubble from './Bubble';
import Quote from './Quote';
import BubbleTail from './BubbleTail';

function checkIfInDefaultPose(pathname) {
  return !extractActionFromPath(pathname) && !extractQuoteIDFromPath(pathname);
}

function useBubble(pathname) {
  const [bubble, setBubble] = useState({
    quote: '',
    quoteID: '',
    isInDefaultPose: false
  });

  useEffect(() => {
    const role = extractRoleFromPath(pathname);
    const action = extractActionFromPath(pathname);
    const quoteID = extractQuoteIDFromPath(pathname);

    const randomQuote = getQuote(role, action, quoteID);

    setBubble({
      quote: randomQuote,
      quoteID,
      isInDefaultPose: checkIfInDefaultPose(pathname)
    });
  }, [pathname]);

  return bubble;
}

function QuoteBubble({ location }) {
  const { pathname } = location;
  const bubble = useBubble(pathname);

  const transitions = useTransition(bubble, bubble => bubble.quoteID, {
    from: { opacity: 0, transform: 'perspective(600px) rotateX(45deg) translateY(-20px) scale(0.8)' },
    enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg) translateY(0) scaleY(1)' },
    leave: { opacity: 0, transform: 'perspective(600px) rotateX(0deg) translateY(-30px) scale(0.6)', color: '#fff' },
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
              <Quote>{item.quote}</Quote>
              <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
              {!item.isInDefaultPose && <CopyButton valueToCopy={item.quote} />}
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
