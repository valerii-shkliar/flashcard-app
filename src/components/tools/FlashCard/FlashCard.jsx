import style from './FlashCard.module.scss';
import MoreIcon from '../../../assets/icons/more.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';
import DeleteIcon from '../../../assets/icons/trash.svg?react';
import { useState } from 'react';
import clsx from 'clsx';
import ProgressBar from '../ProgressBar/ProgressBar';

function FlashCard({ question, answer, area, progress }) {
  const [isModal, setIsModal] = useState(false);
  const customActionModalClass = clsx(style.actionModal, isModal && style.active);

  function toggleModal() {
    setIsModal(!isModal);
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
        <ProgressBar progress={progress} />
        <div className={style.btnContainer}>
          <button className={style.actionsBtn} onClick={toggleModal}>
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
