import style from './Toast.module.scss';
import CloseIcon from '../../../assets/icons/close.svg?react';
import { useEffect } from 'react';
import clsx from 'clsx';

const TOAST_TYPES = {
  created: 'Card created successfully.',
  updated: 'Card updated successfully.',
  deleted: 'Card deleted.',
};

function Toast({ message, onClose }) {
  const customToastClass = clsx(style.toast, message ? style.active : style.hidden);

  function handleCloseClick() {
    onClose('');
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose('');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [message, onClose]);

  return (
    <div className={customToastClass}>
      <p className={style.message}>{TOAST_TYPES[message]}</p>
      <button className={style.btn} onClick={handleCloseClick}>
        <CloseIcon className={style.icon} />
      </button>
    </div>
  );
}

export default Toast;
