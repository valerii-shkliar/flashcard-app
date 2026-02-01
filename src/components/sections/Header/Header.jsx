import style from './Header.module.scss';
import logoIcon from '/logo-icon.svg';
import logoTitle from '/logo-title.svg';
import Switcher from '../../tools/Switcher/Switcher';

function Header() {
  return (
    <header className={style.header}>
      <a href="#" className={style.logoContainer}>
        <img src={logoIcon} alt="logo-icon" className={style.logoIcon} />
        <img src={logoTitle} alt="logo-title" className={style.logoTitle} />
      </a>
      <Switcher />
    </header>
  );
}

export default Header;
