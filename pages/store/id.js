import { useRouter } from 'next/router';

import StoreItemDetail from 'src/components/storelist/StoreItemDetail';

export default function Id() {
  const router = useRouter();
  const { id } = router.query;

  return <StoreItemDetail id={id} />;
}

