import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import styles from './foodList.module.css';

export default function FoodList({ storeList }) {
  return (
    <Grid container>
      <Grid.Row>
        {storeList.map((item) => {
          return (
            <Grid.Column mobile={8} tablet={8} computer={4} key={item.id}>
              <Link href={`/store/${item.id}`}>
                <a>
                  <Image src={item.thumb} rounded size="medium" className={styles.image} />
                </a>
              </Link>
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
    // {showModal && <detailModal /> }
  );
}
