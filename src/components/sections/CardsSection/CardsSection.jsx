import style from './CardsSection.module.scss';
import FlashCard from '../../tools/FlashCard/FlashCard';
import { amountCardsOnPage, BTN_TYPES, cards, MODAL_TYPES } from '../../../constants/data';
import { useEffect, useState } from 'react';
import { getVisibleCards, isFilteredSelector, saveCards } from '../../../store/flashCardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../tools/Settings/Settings';
import FormCard from '../../tools/FormCard/FormCard';
import Button from '../../tools/Button/Button';
import PlusIcon from '../../../assets/icons/plus.svg?react';

function CardsSection() {
  const [amountCards, setAmountCards] = useState(amountCardsOnPage);
  const dispatch = useDispatch();
  const cardsList = useSelector(getVisibleCards);
  const renderedCardsList = cardsList.slice(0, amountCards);
  const isFiltered = useSelector(isFilteredSelector);
  const isCards = cardsList.length !== 0;

  function handleLoadClick() {
    setAmountCards(amountCards + amountCardsOnPage);
  }

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
        {cardsList ? (
          renderedCardsList.map((card) => {
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
      {renderedCardsList.length !== cardsList.length && (
        <Button kind="secondary" onClick={handleLoadClick} className={style.loadBtn}>
          Load More
        </Button>
      )}
    </section>
  );
}

export default CardsSection;
