'use client';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import headerStyles from '../../sass/components/_header.module.scss';
import authSelector from '@/src/redux/authApi/authSelector';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li>
            <Logo />
          </li>
          {isLoggedIn ? (
            <li>
              <AuthNav />
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
