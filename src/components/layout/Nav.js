import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';
import styles from './layout.module.css'

export default function Nav() {
  const router = useRouter();

  let activeMenu = '';

  if (router.pathname === '/') {
    activeMenu = 'home';
  } else if (router.pathname === '/about') {
    activeMenu = 'about';
  } else if (router.pathname === '/store') {
    activeMenu = 'store';
  }

  const goToLink = (event, data) => {
    if (data.name === 'about') {
      router.push('/about');
    } else if (data === 'store') {
      router.push('/store');
    }
  };

  return (
    <>
      <Menu text className={styles.menu}>
        <Menu.Item href="/about" name="about" onClick={goToLink} active={activeMenu === 'about'} className={styles.item}>
          about
        </Menu.Item>
        <Menu.Item href="/store" name="store" onClick={goToLink} active={activeMenu === 'store'} className={styles.item}>
          store
        </Menu.Item>
      </Menu>
    </>
  );
}
