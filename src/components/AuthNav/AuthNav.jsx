'use client';
import authNavStyles from '../../sass/components/_autNav.module.scss';
import { useLogoutMutation } from '@/src/redux/authApi/authApi';
import { useRouter } from 'next/navigation';

const AuthNav = () => {
  const router = useRouter();
  const [logOut] = useLogoutMutation();

  const handleLogout = async () => {
    const response = await logOut();
    if (!response.error) {
      router.replace('/');
    }
  };
  return (
    <div className={authNavStyles.authNanWrapper}>
      <div className={authNavStyles.userAvatar}>
        <span>U</span>
      </div>
      <p className={authNavStyles.userName}>User Name</p>
      <div className={authNavStyles.iconLogout} onClick={handleLogout}>
        <svg width={16} height={16}>
          <use xlinkHref="/sprite.svg#icon-logout-1" />
        </svg>
      </div>
      <svg width={5} height={36} style={{ fill: '#E0E5EB' }}>
        <use xlinkHref="/sprite.svg#icon-line-vertical" />
      </svg>
      <p className={authNavStyles.logoutText} onClick={handleLogout}>
        Exit
      </p>
    </div>
  );
};

export default AuthNav;
