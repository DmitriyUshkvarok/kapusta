'use client';
import authNavStyles from '../../sass/components/_autNav.module.scss';
import { useLogoutMutation } from '@/src/redux/authApi/authApi';
import { openModal } from '@/src/redux/modal/modalSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@/src/components/Modals/Modal/Modal';

const AuthNav = () => {
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  const router = useRouter();
  const [logOut] = useLogoutMutation();

  const handleLogout = async () => {
    // const response = await logOut();
    // if (!response.error) {
    //   router.replace('/');
    // }

    dispatch(
      openModal({
        name: 'exitModal',
        // boardId,
        // columnId,
      })
    );
  };
  return (
    <div className={authNavStyles.authNanWrapper}>
      {isOpen && <Modal />}
      <div className={authNavStyles.userAvatar}>
        <span>U</span>
      </div>
      <p className={authNavStyles.userName}>User Name</p>
      <div className={authNavStyles.iconLogout} onClick={handleLogout}>
        <svg width={16} height={16}>
          <use xlinkHref="/sprite.svg#icon-logout-1" />
        </svg>
      </div>
      <p className={authNavStyles.logoutText} onClick={handleLogout}>
        Exit
      </p>
    </div>
  );
};

export default AuthNav;
