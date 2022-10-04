import api from '../api/index.js';
import { Grid, Image } from 'semantic-ui-react';

export default function FoodStores({ foods }) {
  return (
      <Grid container>
        <Grid.Row>
        {foods.map((food) => {
          return (
              <Grid.Column  mobile={8} tablet={8} computer={4} key={food.id}>
                <Image src={food.thumb} rounded size='medium'/>
              </Grid.Column>
          );
        })}
        </Grid.Row>
      </Grid>
  );
}

export async function getStaticProps() {
  const { foods } = await api.getFoodStores();
  console.log(foods)

  if (!foods) {
    return { notFound: true };
  }

  return { props: { foods } };
}
