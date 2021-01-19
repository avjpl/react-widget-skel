import React from 'react';
import { render } from 'react-dom';

import Widget from './components/widget';

import '../web/css/index.css';

export const init = config => {
  const {
    attachTo = 'widget',
    ...rest
  } = config;
  render(<Widget {...rest} />, document.getElementById(attachTo));
}
