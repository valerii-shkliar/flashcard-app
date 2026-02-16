import style from './CardsSection.module.scss';
import FlashCard from '../../tools/FlashCard/FlashCard';
import { BTN_TYPES, cards, MODAL_TYPES } from '../../../constants/data';
import { useEffect } from 'react';
import { getVisibleCards, isFilteredSelector, saveCards } from '../../../store/flashCardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../tools/Settings/Settings';
import FormCard from '../../tools/FormCard/FormCard';
import Button from '../../tools/Button/Button';
import ModalAction from '../../tools/ModalAction/ModalAction';
import PlusIcon from '../../../assets/icons/plus.svg?react';

function CardsSection() {
  const dispatch = useDispatch();
  const cardsList = useSelector(getVisibleCards);
  const isFiltered = useSelector(isFilteredSelector);
  const isCards = cardsList.length !== 0;

  // function openDeleteModal(id) {
  //   console.log(id);
  // }

  // function openEditModal(id) {
  //   console.log(id);
  // }

  useEffect(() => {
    if (!isCards) {
      dispatch(saveCards(cards));
    }
  }, [dispatch, isCards]);

  return (
    <section className={style.cardsSection}>
      <FormCard>
        <Button type="submit" kind={BTN_TYPES.PRIMARY}>
          <PlusIcon className={style.icon} />
          Create Card
        </Button>
      </FormCard>
      {isCards || isFiltered ? <Settings /> : null}
      <div className={style.flashCardsList} style={{ ...(!isCards && { display: 'block' }) }}>
        {isCards ? (
          cardsList.map((card) => {
            return (
              <FlashCard
                key={card.id}
                id={card.id}
                question={card.question}
                answer={card.answer}
                area={card.area}
                progress={card.progress}
              />
            );
          })
        ) : (
          <div className={style.emptyContainer}>
            <h2 className={style.title}>No cards yet</h2>
            <p className={style.text}>
              Add your first card using the form above and it will show up here.
            </p>
          </div>
        )}
      </div>
      {/* <ModalAction kind={MODAL_TYPES.DELETE} />
      <ModalAction kind={MODAL_TYPES.EDIT} /> */}
    </section>
  );
}

export default CardsSection;
