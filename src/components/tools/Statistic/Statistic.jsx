import style from './Statistic.module.scss';

function Statistic({ Icon, title, amount, color }) {
  return (
    <div className={style.statistic}>
      <div className={style.contentContainer}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.amount}>{amount}</p>
      </div>
      <div className={style.iconContainer} style={{ backgroundColor: `var(--${color})` }}>
        {Icon && <Icon className={style.icon} />}
      </div>
    </div>
  );
}

export default Statistic;
