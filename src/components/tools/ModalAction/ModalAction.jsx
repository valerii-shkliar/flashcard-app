import Button from '../Button/Button';
import FormCard from '../FormCard/FormCard';
import style from './ModalAction.module.scss';
import CloseIcon from '../../../assets/icons/close.svg?react';

function ModalAction({
  kind,
  question,
  answer,
  area,
  id,
  closeModal,
  deleteCardClick,
  editCardClick,
}) {
  let content = null;
  const currentValues = {
    question,
    answer,
    area,
  };

  function handleCloseModalClick() {
    closeModal();
  }

  function handleDeleteClick() {
    deleteCardClick();
  }

  function handleEditClick() {
    editCardClick();
  }

  switch (kind) {
    case 'delete':
      content = (
        <div className={style.deleteContainer}>
          <div className={style.contentContainer}>
            <h2 className={style.title}>Delete this card?</h2>
            <p className={style.text}>This action can’t be undone.</p>
          </div>
          <div className={style.btnContainer}>
            <Button kind={'thirdly'} onClick={handleCloseModalClick}>
              Cancel
            </Button>
            <Button kind={'primary'} onClick={handleDeleteClick}>
              Delete Card
            </Button>
          </div>
        </div>
      );
      break;

    case 'edit':
      content = (
        <div className={style.editContainer}>
          <button className={style.closeBtn} onClick={handleCloseModalClick}>
            <CloseIcon className={style.icon} />
          </button>
          <h2 className={style.title}>Edit your card</h2>
          <FormCard
            className={style.editForm}
            currentValues={currentValues}
            id={id}
            handleEditSubmit={handleEditClick}
          >
            <div className={style.btnContainer}>
              <Button kind={'primary'} type="submit">
                {/* <Button kind={'primary'} type="submit" onClick={handleEditClick}> */}
                Update Card
              </Button>
            </div>
          </FormCard>
        </div>
      );
      break;

    default:
      content = null;
  }
  return (
    <div className={style.modal}>
      <div className={style.overlay} onClick={handleCloseModalClick}></div>
      {content}
    </div>
  );
}

export default ModalAction;
