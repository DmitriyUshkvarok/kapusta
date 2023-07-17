import styles from './page.module.css';
import AuthBlock from '../components/AuthBlock/AuthBlock';
import RestrictedRoute from '../components/RestictedRoute/RestictedRoute';

export default function Home() {
  return (
    <RestrictedRoute>
      <main className={styles.main}>
        <h1>Welcome to the my Next App</h1>
        <AuthBlock />
      </main>
    </RestrictedRoute>
  );
}
