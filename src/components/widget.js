import React from 'react';
import propTypes from 'prop-types';
import css from 'classnames';

import styles from './widget.module.css';

const Widget = ({ message, theme }) => {
  return (
    <div
      className={css({
        [styles.bg]: true,
        [styles.wc]: theme === 'wc',
        [styles.ac]: theme === 'ac',
      })}
    >
      <h1>{message}</h1>
    </div>
  );
};

Widget.propTypes = {
  message: propTypes.string,
  theme: propTypes.string,
};

Widget.defaultProps = {
  message: 'widget',
  theme: 'ac',
  apiEnv: undefined,
  apiKey: undefined,
};

export default Widget;
