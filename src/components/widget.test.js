import React from 'react';
import Widget from './widget';
import { render } from '@testing-library/react';

test('renders', () => {
  const props = { message: 'testing', theme: 'wc' }
  const {debug} = render(<Widget {...props} />);
  debug();
});
