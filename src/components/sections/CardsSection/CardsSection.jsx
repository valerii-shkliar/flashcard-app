import style from './CardsSection.module.scss';
import FlashCard from '../../tools/FlashCard/FlashCard';
import { amountCardsOnPage, BTN_TYPES } from '../../../constants/data';
import { useState } from 'react';
import { getVisibleCards, isFilteredSelector } from '../../../store/flashCardsSlice';
import { useSelector } from 'react-redux';
import Settings from '../../tools/Settings/Settings';
import FormCard from '../../tools/FormCard/FormCard';
import Button from '../../tools/Button/Button';
import PlusIcon from '../../../assets/icons/plus.svg?react';
import EmptyList from '../../tools/EmptyList/EmptyList';
import Toast from '../../tools/Toast/Toast';

function CardsSection() {
  const [amountCards, setAmountCards] = useState(amountCardsOnPage);
  const [toastMessage, setToastMessage] = useState('');

  const cardsList = useSelector(getVisibleCards);
  const renderedCardsList = cardsList.slice(0, amountCards);
  const isFiltered = useSelector(isFilteredSelector);
  const isCards = cardsList.length !== 0;
  const canLoadMore = renderedCardsList.length !== cardsList.length;

  function handleLoadClick() {
    setAmountCards(amountCards + amountCardsOnPage);
  }

  function triggerToast(message) {
    setToastMessage(message);
  }

  return (
    <section className={style.cardsSection}>
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      <FormCard triggerToast={triggerToast}>
        <Button type="submit" kind={BTN_TYPES.PRIMARY}>
          <PlusIcon className={style.icon} />
          Create Card
        </Button>
      </FormCard>
      {isCards || isFiltered ? <Settings className={style.settings} /> : null}
      <div className={style.flashCardsList} style={{ ...(!isCards && { display: 'block' }) }}>
        {cardsList && isCards ? (
          renderedCardsList.map((card) => {
            return (
              <FlashCard
                key={card.id}
                id={card.id}
                question={card.question}
                answer={card.answer}
                area={card.area}
                progress={card.progress}
                triggerToast={triggerToast}
              />
            );
          })
        ) : (
          <EmptyList
            title="No cards yet"
            text="Add your first card using the form above and it will show up here."
            className={style.emptyList}
          />
        )}
      </div>
      {canLoadMore && (
        <Button kind="secondary" onClick={handleLoadClick} className={style.loadBtn}>
          Load More
        </Button>
      )}
    </section>
  );
}

export default CardsSection;
