import { MAX_PROGRESS_FOR_CARD } from '../../../constants/data';
import BrainIcon from '../../../assets/icons/brain-solid.svg?react';
import style from './ProgressBar.module.scss';
import { memo } from 'react';

function ProgressBar({ progress }) {
  const isMasterCard = progress === MAX_PROGRESS_FOR_CARD;

  return (
    <div className={style.progressContainer}>
      {isMasterCard ? (
        <div className={style.masterCard}>
          <BrainIcon className={style.icon} />
          <p className={style.text}>Mastercard</p>
          <span className={style.progressData}>
            {progress}/{MAX_PROGRESS_FOR_CARD}
          </span>
        </div>
      ) : (
        <>
          <div className={style.progressBar}>
            <span
              className={style.filler}
              style={{ width: `${(progress * 100) / MAX_PROGRESS_FOR_CARD}%` }}
            ></span>
          </div>
          <span className={style.progressData}>
            {progress}/{MAX_PROGRESS_FOR_CARD}
          </span>
        </>
      )}
    </div>
  );
}
export default memo(ProgressBar);
