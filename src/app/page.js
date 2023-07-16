import styles from './page.module.css';
import AuthBlock from '../components/AuthBlock/AuthBlock';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the my Next App</h1>
      <AuthBlock />
    </main>
  );
}
