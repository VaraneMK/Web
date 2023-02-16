import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Search } from './../../icons/search.svg';

function Header() {
  return (
    <header className={styles.header}>
      <form>
        <input type="text" placeholder="Искать здесь..."></input>
        <button className={styles.search} type="submit">
          <Search stroke="#736f6f" width="20px" height="24px" />
        </button>
      </form>
    </header>
  );
}

export default Header;
