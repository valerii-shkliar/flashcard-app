import style from './StudyStatistics.module.scss';
import LayersIcon from '../../../assets/icons/layers.svg?react';
import BrainIcon from '../../../assets/icons/brain.svg?react';
import BookIcon from '../../../assets/icons/book.svg?react';
import BoxIcon from '../../../assets/icons/box.svg?react';
import Statistic from '../../tools/Statistic/Statistic';

const statisticsItems = [
  { title: 'Total Cards', amount: 0, icon: LayersIcon, color: 'color-blue-400' },
  { title: 'Mastered', amount: 0, icon: BrainIcon, color: 'color-teal-400' },
  { title: 'In Progress', amount: 0, icon: BookIcon, color: 'color-pink-500' },
  { title: 'Not Started', amount: 0, icon: BoxIcon, color: 'color-pink-400' },
];

function StudyStatistics() {
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
export default StudyStatistics;
