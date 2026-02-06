import clsx from 'clsx';
import style from './Button.module.scss';
import { BTN_TYPES } from '../../../constants/data';

function Button({ children, type, kind, onClick, isDisabled, className, ref }) {
  const btnCustomClass = clsx(
    style.btn,
    className,
    kind === BTN_TYPES.PRIMARY && style.primary,
    kind === BTN_TYPES.SECONDARY && style.secondary,
    kind === BTN_TYPES.THIRDLY && style.thirdly,
  );

  return (
    <button
      className={btnCustomClass}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Button;
