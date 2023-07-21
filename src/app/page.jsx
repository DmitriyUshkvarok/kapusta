import styles from './page.module.scss';
import AuthBlock from '../components/AuthBlock/AuthBlock';
import RestrictedRoute from '../components/RestictedRoute/RestictedRoute';
import globalStyles from './global.module.scss';
import ReactNotification from '../notificationConfig/reactNotification/ReactNotification';

export default function Home() {
  return (
    <>
      <RestrictedRoute>
        <ReactNotification />

        <main className={styles.main}>
          <div className={globalStyles.container}>
            <section className={styles.authSection}>
              <div className={styles.desktopWrapper}>
                <div className={styles.desktopBlockOne}>
                  <div className={styles.authLogo}>
                    <svg
                      className={styles.authLogoIcon}
                      width={183}
                      height={46}
                    >
                      <use xlinkHref="/sprite.svg#icon-auth-logo-kapusta" />
                    </svg>
                  </div>
                  <h3 className={styles.subTitle}>Smart Finance</h3>
                </div>
                <div className={styles.desktopBlockTwo}>
                  <AuthBlock />
                </div>
              </div>
              <div className={styles.iconKapusta}>
                <svg width={83} height={89} className={styles.iconKapustaMob}>
                  <use xlinkHref="/sprite.svg#icon-one-kapusta" />
                </svg>
                <svg
                  width={183}
                  height={142}
                  className={styles.iconKapustaTablet}
                >
                  <use xlinkHref="/sprite.svg#icon-Group-38" />
                </svg>
              </div>
            </section>
          </div>
        </main>
      </RestrictedRoute>
    </>
  );
}
