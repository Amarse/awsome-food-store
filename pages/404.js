import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function NotFound() {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(() => {
      router.push('/')
    }, 5000)
  })

  return (
    <div>
      <img src="/404.png" alt='404' style={{width: "100%"}}/>
    </div>
  );
}
