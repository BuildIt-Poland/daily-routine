// Sets page title and lay out page content and buttons

import React from 'react';

import Wrapper from './Wrapper';

function Page({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Page;
