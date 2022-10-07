import { getStoreList } from 'src/api/api.js';
import { useRouter } from 'next/router.js';
import StoreList from 'src/components/storelist/StoreList.js';

import StoreItemDetail from 'src/components/storelist/StoreItemDetail.js';
import DetailModal from 'src/components/modal/Modal.js';

export default function Store(props) {
  const router = useRouter();
  const { id } = router.query;

  const { items } = props;

  function Error() {
    if (id === undefined) {
      router.push('/');
    }
  }

  const item = items.find((item) => item.id === Number(id));

  console.log(item);

  return (
    <>
      <StoreList items={items} />
      {router.query.id && (
        <DetailModal
          onClose={() => {
            router.push('/store');
          }}
        >
          <StoreItemDetail id={id} item={item} />
        </DetailModal>
      )}
    </>
  );
}

export async function getStaticProps() {
  const items = await getStoreList();

  if (!items) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      items: items,
    },
  };
}
