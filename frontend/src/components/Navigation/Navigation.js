import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import ProfileButton from './ProfileButton';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className={styles.navLink}>Log In</NavLink>
        <NavLink to="/signup" className={styles.navLink}>Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink exact to="/" className={styles.navLink}>Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
