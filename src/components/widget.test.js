import React from 'react';
import { render } from 'test-utils';

import Widget from './widget';

test('renders', () => {
  const props = { message: 'testing', theme: 'wc' };
  const { getByText } = render(<Widget {...props} />);
  expect(getByText('testing')).toBeInTheDocument();
});
