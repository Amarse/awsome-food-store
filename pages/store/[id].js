import axios from "axios";
import { Item } from "semantic-ui-react";


export default function DetailPage({ item }) {

  return (
    <div>
      <Item item={item}/>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://localhost:9000/stores/${id}`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
