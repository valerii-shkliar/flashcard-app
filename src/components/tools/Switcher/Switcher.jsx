import clsx from 'clsx';
import style from './Switcher.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveMode, setActiveMode } from '../../../store/appModeSlice';
import { BTN_TYPES, MODE } from '../../../constants/data';
import Button from '../Button/Button';

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
      <Button
        className={customStudySwitcherClass}
        onClick={handleStudySwitcherClick}
        type="button"
        kind={BTN_TYPES.THIRDLY}
      >
        Study Mode
      </Button>
      <Button
        className={customCardsSwitcherClass}
        onClick={handleCardsSwitcherClick}
        type="button"
        kind={BTN_TYPES.THIRDLY}
      >
        All Cards
      </Button>
    </div>
  );
}

export default Switcher;
