import { useRouter } from 'next/router';

function Error({ statusCode }) {
  const router = useRouter();

  if (statusCode === '5xx') {
    router.push('/');
  }

  return function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `${statusCode} 서버 오류`
          : "클라이언트 오류"}
      </p>
    )
  }
}

export default Error;
