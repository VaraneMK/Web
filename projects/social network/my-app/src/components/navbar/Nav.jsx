/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Nav.module.css';
import { ReactComponent as Profile } from './../../icons/user.svg';
import { ReactComponent as Messages } from './../../icons/message-circle.svg';
import { ReactComponent as List } from './../../icons/list.svg';
import { ReactComponent as Music } from './../../icons/music.svg';
import { ReactComponent as Settings } from './../../icons/settings.svg';
import { ReactComponent as Logout } from './../../icons/log-out.svg';
import { ReactComponent as Friends } from './../../icons/users.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.user}>
        <div className={styles.avatar}></div>
        Никнейм
      </div>
      <div className={styles.menu}>
        <NavLink to="/profile" className={navData => (navData.isActive ? styles.active : styles.item)}>
          <table aria-colspan={2}>
            <tbody>
              <tr>
                <td className={styles.icon}>
                  <Profile />
                </td>
                <td className={styles.link}>Профиль</td>
              </tr>
            </tbody>
          </table>
        </NavLink>
        <NavLink to="/dialogs" className={navData => (navData.isActive ? styles.active : styles.item)}>
          <table>
            <tbody>
              <tr>
                <td className={styles.icon}>
                  <Messages />
                </td>
                <td className={styles.link}>Сообщения</td>
              </tr>
            </tbody>
          </table>
        </NavLink>
        <NavLink to="/news" className={navData => (navData.isActive ? styles.active : styles.item)}>
          <table>
            <tbody>
              <tr>
                <td className={styles.icon}>
                  <List />
                </td>
                <td className={styles.link}>Лента</td>
              </tr>
            </tbody>
          </table>
        </NavLink>
        <NavLink to="/music" className={navData => (navData.isActive ? styles.active : styles.item)}>
          <table>
            <tbody>
              <tr>
                <td className={styles.icon}>
                  <Music />
                </td>
                <td className={styles.link}>Музыка</td>
              </tr>
            </tbody>
          </table>
        </NavLink>
        <NavLink to="/friends" className={navData => (navData.isActive ? styles.active : styles.item)}>
          <table>
            <tbody>
              <tr>
                <td className={styles.icon}>
                  <Friends />
                </td>
                <td className={styles.link}>Друзья</td>
              </tr>
            </tbody>
          </table>
        </NavLink>
      </div>
      <div className={styles.footer}>
        <button>
          <Settings width="25" height="25" />
        </button>
        <button>
          <Logout width="25" height="25" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
