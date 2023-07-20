'use client';
import styles from '@/src/sass/components/_summary.module.scss';
import { useMediaQuery } from 'react-responsive';

const Summary = ({ data }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    isTablet && (
      <div
        style={{
          width: data.length === 0 ? '230px' : '',
          height: data.length === 0 ? '292px' : '',
        }}
        className={styles.container}
      >
        <p className={styles.title}>Summary</p>

        <ul className={styles.list}>
          {data.map((item, i) => (
            <li key={i} className={styles.item}>
              <p className={styles.desc}>{item.month}</p>
              <p className={styles.desc}>{item.sum}.00</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Summary;
