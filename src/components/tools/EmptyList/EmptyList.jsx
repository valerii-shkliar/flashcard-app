import style from './EmptyList.module.scss';

function EmptyList() {
  return (
    <div className={style.emptyList}>
      <h2 className={style.title}>No cards yet</h2>
      <p className={style.text}>
        Add your first card using the form above and it will show up here.
      </p>
    </div>
  );
}

export default EmptyList;
