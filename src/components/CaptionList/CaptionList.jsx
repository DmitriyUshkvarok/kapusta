import styles from '@/src/sass/components/_captionList.module.scss';

export default function CaptionList() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Date</p>
      <p className={styles.title}>Description</p>
      <p className={styles.title}>Category</p>
      <p className={styles.title}>Sum</p>
    </div>
  );
}
