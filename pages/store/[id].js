import { useRouter } from 'next/router'
import { LabelDetail } from 'semantic-ui-react';

export default function Deteil() {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
};
