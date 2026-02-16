import style from './FlashCard.module.scss';
import MoreIcon from '../../../assets/icons/more.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';
import DeleteIcon from '../../../assets/icons/trash.svg?react';
import { useState } from 'react';
import clsx from 'clsx';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../store/flashCardsSlice';
import { MODAL_TYPES } from '../../../constants/data';
import ModalAction from '../ModalAction/ModalAction';
import { createPortal } from 'react-dom';

function FlashCard({ question, answer, area, progress, id }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [modal, setModal] = useState('');
  const dispatch = useDispatch();
  const customActionModalClass = clsx(style.actionModal, isDropdown && style.active);
  const root = document.getElementById('root');

  function toggleModal() {
    setIsDropdown(!isDropdown);
  }

  function actionDeleteClick() {
    setModal(MODAL_TYPES.DELETE);
  }

  function actionEditClick() {
    setModal(MODAL_TYPES.EDIT);
  }

  function closeModal() {
    setModal('');
    toggleModal();
  }

  function deleteCardClick() {
    dispatch(deleteCard(id));
  }

  function editCardClick() {
    setModal('');
    toggleModal();
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
              <button className={style.actionBtn} onClick={actionEditClick}>
                <EditIcon className={style.icon} />
                Edit
              </button>
            </li>
            <li className={style.areaItem}>
              <button className={style.actionBtn} onClick={actionDeleteClick}>
                <DeleteIcon className={style.icon} />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>

      {modal === MODAL_TYPES.DELETE &&
        createPortal(
          <ModalAction
            id={id}
            kind={MODAL_TYPES.DELETE}
            closeModal={closeModal}
            deleteCardClick={deleteCardClick}
          />,
          root,
        )}
      {modal === MODAL_TYPES.EDIT &&
        createPortal(
          <ModalAction
            id={id}
            kind={MODAL_TYPES.EDIT}
            question={question}
            answer={answer}
            area={area}
            closeModal={closeModal}
            editCardClick={editCardClick}
          />,
          root,
        )}
    </article>
  );
}
export default FlashCard;
