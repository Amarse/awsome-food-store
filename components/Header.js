import { useRouter } from 'next/router';
import { Menu, Segment } from 'semantic-ui-react'

export default function Header() {
  const router = useRouter();

  let activeMenu = '';

  if (router.pathname === '/') {
    activeMenu = 'AWESOME FOOD STORE';
  } else if (router.pathname === '/about') {
    activeMenu = 'about';
  } else if (router.pathname === '/store') {
    activeMenu = 'store';
  }

  const goToLink = (event, data) => {
    if (data.name === 'about') {
      router.push('/about');
    } else if (data === 'store') {
      router.push('/store')
    }
  };

  return (
    <Menu>
      <Menu.Item href="/about" name="about" onClick={goToLink} active={activeMenu === 'about'}>about</Menu.Item> 
      <Menu.Item href="/store" name="store" onClick={goToLink} active={activeMenu === 'store'}>store</Menu.Item>
    </Menu>
  )
}
