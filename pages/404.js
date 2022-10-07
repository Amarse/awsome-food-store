import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 5000);
  });

  return (
    <div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      <span>404 : 페이지를 찾을 수 없습니다.</span>
    </div>
  );
}
