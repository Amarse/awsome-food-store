import axios from 'axios';
import { useRouter } from 'next/router.js';

import StoreList from '../../src/components/storelist/StoreList.js';
import DetailModal from '../../src/components/modal/Modal.js';
import StoreItemDetail from '../../src/components/storelist/StoreItemDetail.js';


export default function Store({ list }) {
  const router = useRouter();

  return (
    <div>
      <StoreList list={list} />
      {router.query.id && (
        <DetailModal
          onClose={() => {
            router.push("/store");
          }}
        >
          <StoreItemDetail id={router.query.id} />
        </DetailModal>
      )}
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
