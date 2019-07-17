import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { withRouter } from 'react-router-dom';
import Measure from 'react-measure';

import { location } from '../../types';
import { THOUGHT, SPEECH } from '../../constants/speechBubbleVariant';
import { colorWhite } from '../../styles/designTokens';
import useBubble from './useBubble';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Bubble from './Bubble';
import Quote from './Quote';
import BubbleTail from './BubbleTail';

function QuoteBubble({ location }) {
  const { pathname } = location;
  const bubble = useBubble(pathname);

  // Increases wrapper height for big quote bubbles
  // wrapperHeight and Measure is pretty much required only for small mobile devices
  // TODO check performance implications and maybe better way to handle it @blurbyte
  const [wrapperHeight, setWrapperHeight] = useState(0);

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

  const handleResize = contentRect => {
    const offsetHeight = contentRect.offset.height;
    if (wrapperHeight !== offsetHeight) {
      setWrapperHeight(offsetHeight);
    }
  };

  return (
    <Measure offset onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper calculatedHeight={wrapperHeight}>
          {transitions.map(
            ({ item, props, key }) =>
              item && (
                <Bubble key={key} style={props} ref={measureRef}>
                  <Quote>{item.quote}</Quote>
                  <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
                  {!item.isInDefaultPose && <CopyButton valueToCopy={item.quote} />}
                </Bubble>
              )
          )}
        </Wrapper>
      )}
    </Measure>
  );
}

QuoteBubble.propTypes = {
  location: location.isRequired
};

export default withRouter(QuoteBubble);
