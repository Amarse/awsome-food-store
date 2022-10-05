import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';

import styles from './storeList.module.css';

export default function StoreList({ list }) {
  return (
    <Grid container>
      <Grid.Row>
        {list.map((item) => {
          return (
            <Grid.Column mobile={8} tablet={8} computer={4} key={item.id}>
              <Link href="/store/[id]" as={`/store/${item.id}`}>
                <a>
                  <Image src={item.thumb} rounded size="medium" className={styles.image} />
                </a>
              </Link>
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
}
