import style from './CardsSection.module.scss';
import FlashCard from '../../tools/FlashCard/FlashCard';
import { cards } from '../../../constants/data';
import { useEffect } from 'react';
import { getVisibleCards, saveCards } from '../../../store/flashCardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../tools/Settings/Settings';
import FormCard from '../../tools/FormCard/FormCard';

function CardsSection() {
  const dispatch = useDispatch();
  const cardsList = useSelector(getVisibleCards);

  useEffect(() => {
    dispatch(saveCards(cards));
  }, [dispatch]);

  return (
    <section className={style.cardsSection}>
      <FormCard />
      <Settings />
      <div className={style.flashCardsList}>
        {cardsList.map((card) => {
          return (
            <FlashCard
              key={card.id}
              question={card.question}
              answer={card.answer}
              area={card.area}
              progress={card.progress}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardsSection;
