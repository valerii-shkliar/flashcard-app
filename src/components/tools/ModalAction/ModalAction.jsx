import style from './ModalAction.module.scss';

function ModalAction({ closeModal, children }) {
  return (
    <div className={style.modal}>
      <div className={style.overlay} onClick={closeModal}></div>
      {children}
    </div>
  );
}

export default ModalAction;
