import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Cv(){
  const router = useRouter();

  useEffect(() => {
    router.replace('/Artem_Furman_CV.pdf');
  }, [router]);

  return null;
};