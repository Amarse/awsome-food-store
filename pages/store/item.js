import Link from 'next/link';
import { Image } from 'semantic-ui-react';

export default function StoreListItem({ id, thumb }) {
  return (
    <>
      <Link href={`/store/${id}`} as={`/store/${id}`} scroll={false} shallow={true}>
        <a>
          <Image src={thumb} rounded size="medium" style={{ margin: '20px 0 ' }} />
        </a>
      </Link>
    </>
  );
}
