import style from './StudyStatistics.module.scss';
import LayersIcon from '../../../assets/icons/layers.svg?react';
import BrainIcon from '../../../assets/icons/brain.svg?react';
import BookIcon from '../../../assets/icons/book.svg?react';
import BoxIcon from '../../../assets/icons/box.svg?react';
import Statistic from '../../tools/Statistic/Statistic';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  getAmountCards,
  getAmountCardsInProgress,
  getAmountCardsNotStarted,
  getAmountMasteredCards,
} from '../../../store/flashCardsSlice';

function StudyStatistics() {
  const amountAllCards = useSelector(getAmountCards);
  const amountMasteredCards = useSelector(getAmountMasteredCards);
  const amountCardsInProgress = useSelector(getAmountCardsInProgress);
  const amountNotStartedCards = useSelector(getAmountCardsNotStarted);

  const statisticsItems = [
    { title: 'Total Cards', amount: amountAllCards, icon: LayersIcon, color: 'color-blue-400' },
    { title: 'Mastered', amount: amountMasteredCards, icon: BrainIcon, color: 'color-teal-400' },
    {
      title: 'In Progress',
      amount: amountCardsInProgress,
      icon: BookIcon,
      color: 'color-pink-500',
    },
    { title: 'Not Started', amount: amountNotStartedCards, icon: BoxIcon, color: 'color-pink-400' },
  ];

  return (
    <div className={style.studyStatistics}>
      <h2 className={style.statisticsTitle}>Study Statistics</h2>
      <div className={style.statisticsContainer}>
        {statisticsItems.map((statistic, index) => {
          return (
            <Statistic
              key={index}
              Icon={statistic.icon}
              title={statistic.title}
              amount={statistic.amount}
              color={statistic.color}
            />
          );
        })}
      </div>
    </div>
  );
}
export default memo(StudyStatistics);
