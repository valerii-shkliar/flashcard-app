import clsx from 'clsx';
import style from './Switcher.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveMode, setActiveMode } from '../../../store/appModeSlice';
import { MODE } from '../../../constants/data';

function Switcher() {
  const activeMode = useSelector(getActiveMode);
  const dispatch = useDispatch();
  const customStudySwitcherClass = clsx(style.switcher, activeMode === MODE.STUDY && style.active);
  const customCardsSwitcherClass = clsx(style.switcher, activeMode === MODE.CARDS && style.active);

  function handleStudySwitcherClick() {
    if (activeMode !== MODE.STUDY) {
      dispatch(setActiveMode(MODE.STUDY));
    }
  }

  function handleCardsSwitcherClick() {
    if (activeMode !== MODE.CARDS) {
      dispatch(setActiveMode(MODE.CARDS));
    }
  }

  return (
    <div className={style.switcherContainer}>
      <button className={customStudySwitcherClass} onClick={handleStudySwitcherClick}>
        Study Mode
      </button>
      <button className={customCardsSwitcherClass} onClick={handleCardsSwitcherClick}>
        All Cards
      </button>
    </div>
  );
}

export default Switcher;
