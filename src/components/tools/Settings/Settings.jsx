import clsx from 'clsx';
import style from './Settings.module.scss';
import { useEffect, useRef, useState } from 'react';
import ShuffleIcon from '../../../assets/icons/shuffle.svg?react';
import ArrowIcon from '../../../assets/icons/arrow-down.svg?react';
import CheckBox from '../../tools/CheckBox/CheckBox';
import { areas, BTN_TYPES } from '../../../constants/data';
import AreaItem from './AreaItem';
import { useDispatch, useSelector } from 'react-redux';
import { hideMastered, isMasteredHide, shuffleCards } from '../../../store/flashCardsSlice';
import Button from '../Button/Button';

function Settings({ className }) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const dispatch = useDispatch();
  const isHide = useSelector(isMasteredHide);
  const customActionModalClass = clsx(style.actionModal, isActiveModal && style.active);
  const customSettingsClass = clsx(style.settingsContainer, className);
  const filterBtnRef = useRef(null);
  const modalRef = useRef(null);

  function handleFilterBtnClick() {
    setIsActiveModal(!isActiveModal);
  }

  function handleMasteredCheckBoxChange() {
    dispatch(hideMastered());
  }

  function handleShuffleClick() {
    dispatch(shuffleCards());
  }
  useEffect(() => {
    function handleDocumentClick(e) {
      if (!isActiveModal) return;

      if (!modalRef.current.contains(e.target) && !filterBtnRef.current.contains(e.target)) {
        setIsActiveModal(false);
      }
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isActiveModal]);

  return (
    <div className={customSettingsClass}>
      <div className={style.filterContainer}>
        <Button
          type="button"
          kind={BTN_TYPES.THIRDLY}
          className={style.filterBtn}
          onClick={handleFilterBtnClick}
          ref={filterBtnRef}
        >
          All Categories
          <ArrowIcon className={style.icon} />
        </Button>
        <ul className={customActionModalClass} ref={modalRef}>
          {areas.map((area) => (
            <AreaItem key={area} area={area} />
          ))}
        </ul>
        <div className={style.checkBoxContainer}>
          <CheckBox id="hide-mastered" checked={isHide} onChange={handleMasteredCheckBoxChange} />
          <label htmlFor="hide-mastered" className={style.label}>
            Hide Mastered
          </label>
        </div>
      </div>
      <Button
        className={style.filterBtn}
        type="button"
        kind={BTN_TYPES.THIRDLY}
        onClick={handleShuffleClick}
      >
        <ShuffleIcon className={style.icon} />
        Shuffle
      </Button>
    </div>
  );
}
export default Settings;
