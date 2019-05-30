import React from 'react';

import GenerateForm from '@components/generate-form';

import styles from './Home.module.scss';

function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <img className={styles.heroLogo} src="/img/logo.png" alt="" />
        <h2 className={styles.heroDescription}>socket-io-chat</h2>
        <GenerateForm />
      </div>
    </main>
  );
}

export default (Home);
