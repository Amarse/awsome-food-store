import axios from 'axios';
import StoreList from '../../src/components/storelist/StoreList.js';

export default function Store({ list }) {

  return (
    <div>
      <StoreList list={list} />
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
    },
  };
}
