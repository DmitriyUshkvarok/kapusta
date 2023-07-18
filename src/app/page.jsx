import styles from './page.module.scss';
import AuthBlock from '../components/AuthBlock/AuthBlock';
import RestrictedRoute from '../components/RestictedRoute/RestictedRoute';

export default function Home() {
  return (
    <RestrictedRoute>
      <main className={styles.main}>
        <section className={styles.authSection}>
          <div className={styles.authLogo}>
            <svg width={183} height={46}>
              <use xlinkHref="/sprite.svg#icon-auth-logo-kapusta" />
            </svg>
          </div>
          <h3 className={styles.subTitle}>Smart Finance</h3>
          <AuthBlock />
        </section>
      </main>
    </RestrictedRoute>
  );
}
