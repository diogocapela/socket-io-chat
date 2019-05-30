import React, { memo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from '@components/button';

import styles from './GenerateForm.module.scss';

function generateRandom(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function GenerateForm({ history }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateRoomClick = () => {
    const slug = generateRandom(10);
    setIsLoading(true);
    setTimeout(() => {
      history.push(`/room/${slug}`);
    }, 2000);
  };

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleCreateRoomClick}>Generate Chatroom</Button>
    </div>
  );
}

GenerateForm.propTypes = {

};

GenerateForm.defaultProps = {

};

const enhance = compose(
  withRouter,
  memo,
);

export default enhance(GenerateForm);
