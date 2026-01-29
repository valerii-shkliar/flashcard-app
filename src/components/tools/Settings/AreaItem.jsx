import { useDispatch, useSelector } from 'react-redux';
import { filterCards, isCheckedArea } from '../../../store/flashCardsSlice';
import style from './AreaItem.module.scss';
import CheckBox from '../CheckBox/CheckBox';

function AreaItem({ area }) {
  const dispatch = useDispatch();
  const isChecked = useSelector(isCheckedArea(area));

  function handleActionBtnClick(e) {
    const area = e.target.textContent;

    dispatch(filterCards(area));
  }

  return (
    <li className={style.areaItem}>
      <button className={style.actionBtn} onClick={handleActionBtnClick}>
        <CheckBox checked={isChecked} onChange={handleActionBtnClick} />
        {area}
      </button>
    </li>
  );
}
export default AreaItem;
