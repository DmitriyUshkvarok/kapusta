'use client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/authApi/authSelector';
import { useEffect, useState } from 'react';

const RestrictedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const getAuthToken = useSelector(authSelector.authToken);

  useEffect(() => {
    if (getAuthToken) {
      const isOnLoginPage = router.pathname === '/';
      if (isOnLoginPage) {
        router.replace('/home');
      }
    }

    setLoading(false);
  }, [getAuthToken, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default RestrictedRoute;
