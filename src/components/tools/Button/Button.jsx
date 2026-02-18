import clsx from 'clsx';
import style from './Button.module.scss';

function Button({ children, type = 'button', kind, onClick, isDisabled, className, ref }) {
  const btnCustomClass = clsx(style.btn, className, style[kind]);

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
