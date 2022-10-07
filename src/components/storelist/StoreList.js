import { Grid } from 'semantic-ui-react';
import StoreListItem from './StoreListItem.js';

export default function StoreList(props) {
  const { items } = props;
  return (
    <>
      <Grid>
        <Grid.Row>
          {items.map((item) => {
            return (
              <Grid.Column  mobile={8} tablet={8} computer={4} key={item.id}>
                <StoreListItem id={item.id} thumb={item.thumb} />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}
