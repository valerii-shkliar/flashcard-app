import style from './FlashCard.module.scss';
import MoreIcon from '../../../assets/icons/more.svg?react';
import BrainIcon from '../../../assets/icons/brain-solid.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';
import DeleteIcon from '../../../assets/icons/trash.svg?react';
import { MAX_PROGRESS_FOR_CARD } from '../../../constants/data';
import { useState } from 'react';
import clsx from 'clsx';

function FlashCard({ question, answer, area, progress }) {
  const isMasterCard = progress === MAX_PROGRESS_FOR_CARD;
  const [isActiveModal, setIsActiveModal] = useState(false);
  const customActionModalClass = clsx(style.actionModal, isActiveModal && style.active);

  function handleActionBtnClick() {
    setIsActiveModal(!isActiveModal);
  }

  return (
    <article className={style.flashCard}>
      <h2 className={style.question}>{question}</h2>
      <div className={style.contentContainer}>
        <p className={style.kind}>Answer:</p>
        <p className={style.answer}>{answer}</p>
      </div>
      <div className={style.extraDetailsContainer}>
        <div className={style.areaContainer}>
          <p className={style.area}>{area}</p>
        </div>
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
        <div className={style.btnContainer}>
          <button className={style.actionsBtn} onClick={handleActionBtnClick}>
            <MoreIcon className={style.icon} />
          </button>
          <ul className={customActionModalClass}>
            <li className={style.areaItem}>
              <button className={style.actionBtn}>
                <EditIcon className={style.icon} />
                Edit
              </button>
            </li>
            <li className={style.areaItem}>
              <button className={style.actionBtn}>
                <DeleteIcon className={style.icon} />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
export default FlashCard;
