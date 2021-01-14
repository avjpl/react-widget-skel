import React from 'react';
import css from 'classnames';

import styles from './widget.module.css';

const Widget = ({ message, theme }) => {
  console.log({ message, theme });

  return (
    <div className={css(
      {
        [styles.bg]: true,
        [styles.wc]: theme === 'wc',
        [styles.ac]: theme === 'ac',
      }
    )}>
      <h1>{message}</h1>
    </div>
  );
};

Widget.defaultProps = {
  message: 'default',
  theme: 'ac',
};

export default Widget;
