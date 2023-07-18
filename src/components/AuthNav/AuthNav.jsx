import authNavStyles from '../../sass/components/_autNav.module.scss';

const AuthNav = () => {
  return (
    <div className={authNavStyles.authNanWrapper}>
      <div className={authNavStyles.userAvatar}>
        <span>U</span>
      </div>
      <p className={authNavStyles.userName}>User Name</p>
      <div className={authNavStyles.iconLogout}>
        <svg width={16} height={16}>
          <use xlinkHref="/sprite.svg#icon-logout-1" />
        </svg>
      </div>
      <p className={authNavStyles.logoutText}>Exit</p>
    </div>
  );
};

export default AuthNav;
