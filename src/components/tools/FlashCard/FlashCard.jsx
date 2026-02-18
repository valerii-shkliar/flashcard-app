import style from './FlashCard.module.scss';
import MoreIcon from '../../../assets/icons/more.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';
import DeleteIcon from '../../../assets/icons/trash.svg?react';
import { useState } from 'react';
import clsx from 'clsx';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../store/flashCardsSlice';
import { BTN_TYPES, MODAL_TYPES } from '../../../constants/data';
import ModalAction from '../ModalAction/ModalAction';
import Button from '../Button/Button';
import FormCard from '../FormCard/FormCard';
import CloseIcon from '../../../assets/icons/close.svg?react';

function FlashCard({ question, answer, area, progress, id }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [modal, setModal] = useState('');
  const dispatch = useDispatch();
  const customActionModalClass = clsx(style.actionModal, isDropdown && style.active);

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

  function handleCloseModalClick() {
    closeModal();
  }

  function handleDeleteClick() {
    deleteCardClick();
  }

  function handleEditClick() {
    editCardClick();
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

      <ModalAction isOpen={modal === MODAL_TYPES.DELETE} closeModal={closeModal}>
        <div className={style.deleteContainer}>
          <div className={style.contentContainer}>
            <h2 className={style.title}>Delete this card?</h2>
            <p className={style.text}>This action can’t be undone.</p>
          </div>
          <div className={style.btnContainer}>
            <Button kind={BTN_TYPES.THIRDLY} onClick={handleCloseModalClick}>
              Cancel
            </Button>
            <Button kind={BTN_TYPES.PRIMARY} onClick={handleDeleteClick}>
              Delete Card
            </Button>
          </div>
        </div>
      </ModalAction>
      <ModalAction isOpen={modal === MODAL_TYPES.EDIT} closeModal={closeModal}>
        <div className={style.editContainer}>
          <button className={style.closeBtn} onClick={handleCloseModalClick}>
            <CloseIcon className={style.icon} />
          </button>
          <h2 className={style.title}>Edit your card</h2>
          <FormCard
            className={style.editForm}
            currentValues={{
              question,
              answer,
              area,
            }}
            id={id}
            handleEditSubmit={handleEditClick}
          >
            <div className={style.btnContainer}>
              <Button kind={BTN_TYPES.PRIMARY} type="submit">
                Update Card
              </Button>
            </div>
          </FormCard>
        </div>
      </ModalAction>
    </article>
  );
}
export default FlashCard;
