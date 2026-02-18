import style from './InputField.module.scss';
import InputError from './../../../assets/icons/input-error.svg?react';

function InputField({ label, placeholder, isTextarea, register, error, defaultValue }) {
  const name = label.toLowerCase();
  const registerOrName = register
    ? { ...register(name, { required: `Please enter a ${name}.` }) }
    : { name };

  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className={style.textarea}
          id={name}
          {...registerOrName}
          aria-invalid={error ? 'true' : 'false'}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          {...registerOrName}
          type="text"
          placeholder={placeholder}
          className={style.input}
          id={name}
          aria-invalid={error ? 'true' : 'false'}
          defaultValue={defaultValue}
        />
      )}

      {error && (
        <span className={style.error}>
          <InputError className={style.icon} />
          {error.message}
        </span>
      )}
    </div>
  );
}

export default InputField;
