'use client';

import { useMediaQuery } from 'react-responsive';
import styles from '@/src/sass/components/_createPanelExpense.module.scss';
import CaptionList from '../CaptionList/CaptionList';

export default function ListPanelBalance({ data }) {
  const isTablet = useMediaQuery({ minWidth: 768 });
  let emptyData = data;
  let isEmpty;
  if (emptyData.length === 0 && isTablet) {
    emptyData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    isEmpty = true;
  }
  return (
    <div>
      {isTablet && <CaptionList />}
      <ul className={styles.container}>
        {emptyData?.map((list, i) => (
          <li
            style={{ height: isEmpty ? '40px' : '' }}
            className={styles.itemList}
            key={i}
          >
            <div className={styles.wrapFlexContainer}>
              <p className={styles.titleNameProduct}>{list?.name}</p>
              {isTablet ? (
                <>
                  <span
                    style={{ order: 1 }}
                    className={styles.titleDateAndCategory}
                  >
                    {list?.date}
                  </span>
                  <p
                    style={{ order: 3 }}
                    className={styles.titleDateAndCategory}
                  >
                    {list?.category}
                  </p>
                </>
              ) : (
                <div className={styles.wrapCategoryDate}>
                  <span className={styles.titleDateAndCategory}>
                    {list?.date}
                  </span>
                  <p className={styles.titleDateAndCategory}>
                    {list?.category}
                  </p>
                </div>
              )}
            </div>
            <div
              style={{ display: isEmpty ? 'none' : '' }}
              className={styles.wrapIconSum}
            >
              <p className={styles.sum}>{list?.sum}.00 uan.</p>
              <svg width={18} height={18}>
                <use xlinkHref="/sprite.svg#icon-delete-1" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
