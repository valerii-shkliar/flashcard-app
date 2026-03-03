import style from './CheckBox.module.scss';

function CheckBox({ id, checked, onChange }) {
  return (
    <input
      type="checkbox"
      className={style.checkbox}
      id={id}
      checked={checked}
      onChange={onChange}
    />
  );
}

export default CheckBox;
