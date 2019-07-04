// Sets page title and lay out page content and buttons

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const DEFAULT_TITLE = 'Daily Routine';

function Page({ title, children }) {
  useEffect(() => {
    document.title = title ? `${DEFAULT_TITLE} | ${title}` : DEFAULT_TITLE;
  }, [title]);

  return <Wrapper>{children}</Wrapper>;
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
