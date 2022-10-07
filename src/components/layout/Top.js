import { Header } from 'semantic-ui-react';
import styles from './layout.module.css';

import Nav from './Nav.js';

export default function Top() {
  return (
    <div >
      <div className={styles.continer}>
        <Header as="h1" className={styles.header}>
          AWESOME FOOD STORE
        </Header>
        <Nav />
      </div>
    </div>
  );
}
