import React from 'react';
import { render } from 'react-dom';

import Widget from './components/widget';

import '../web/css/index.css';

if (!window?.mode) {
  render(<Widget />, document.getElementById('app'));
}

export const init = config => {
  render(<Widget {...config} />, document.getElementById('app'));
}
