import clsx from 'clsx';
import style from './Header.module.scss';
import logoIcon from '/logo-icon.svg';
import logoTitle from '/logo-title.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveMode, setActiveMode } from '../../../store/mainSlice';
import { CARDS_MODE, STUDY_MODE } from '../../../constants/data';

function Header() {
  const activeMode = useSelector(getActiveMode);
  const dispatch = useDispatch();
  const customStudySwitcherClass = clsx(style.switcher, activeMode === STUDY_MODE && style.active);
  const customCardsSwitcherClass = clsx(style.switcher, activeMode === CARDS_MODE && style.active);

  function handleStudySwitcherClick() {
    if (activeMode !== STUDY_MODE) {
      dispatch(setActiveMode(STUDY_MODE));
    }
  }

  function handleCardsSwitcherClick() {
    if (activeMode !== CARDS_MODE) {
      dispatch(setActiveMode(CARDS_MODE));
    }
  }

  return (
    <header className={style.header}>
      <a href="#" className={style.logoContainer}>
        <img src={logoIcon} alt="logo-icon" className={style.logoIcon} />
        <img src={logoTitle} alt="logo-title" className={style.logoTitle} />
      </a>
      <div className={style.switcherContainer}>
        <button className={customStudySwitcherClass} onClick={handleStudySwitcherClick}>
          Study Mode
        </button>
        <button className={customCardsSwitcherClass} onClick={handleCardsSwitcherClick}>
          All Cards
        </button>
      </div>
    </header>
  );
}

export default Header;
