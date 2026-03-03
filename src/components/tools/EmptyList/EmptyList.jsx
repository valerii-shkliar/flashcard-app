import clsx from 'clsx';
import { BTN_TYPES } from '../../../constants/data';
import Button from '../Button/Button';
import style from './EmptyList.module.scss';

function EmptyList({ title, text, button, className, btnClick }) {
  const customEmptyListClass = clsx(style.emptyList, className);

  return (
    <div className={customEmptyListClass}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>

      {button && (
        <div className={style.btnContainer}>
          <Button kind={BTN_TYPES.SECONDARY} onClick={btnClick}>
            {button}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyList;
