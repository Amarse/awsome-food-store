import { Grid } from 'semantic-ui-react';
import StoreListItem from './StoreListItem';

export default function StoreList({ list }) {
  return (
    <>
      <Grid container>
        <Grid.Row>
          {list.map((item) => {
            return (
              <Grid.Column mobile={8} tablet={8} computer={4} key={item.id}>
                <StoreListItem id={item.id} thumb={item.thumb} />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}
