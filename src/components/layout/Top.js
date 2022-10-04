import { Header } from 'semantic-ui-react';
import Nav from './Nav';
import styles from './layout.module.css';

export default function Top() {
  return (
    <div >
      <div className={styles.continer}>
        <Header as="h2" className={styles.header}>
          AWESOME FOOD STORE
        </Header>
        <Nav />
      </div>{' '}
    </div>
  );
}
