import React, { useEffect } from 'react';
import css from 'classnames';

import styles from './widget.module.css';

const Widget = ({ message, theme, apiKey, apiEnv }) => {

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await fetch(`https://search-api.hmhost.co.uk/${apiEnv}/derivatives?make=ford&model=fiesta&bodystyle=hatchback`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
      })
      const data = await resp.json();
      console.log(data);
    }

    if (apiKey) {
      makeRequest();
    }

    console.log('useEffect called');
  }, [apiKey, apiEnv]);

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
  message: 'widget',
  theme: 'ac',
  apiEnv: undefined,
  apiKey: undefined,
};

export default Widget;
