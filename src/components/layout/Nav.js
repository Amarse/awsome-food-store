import Link from "next/link";
import { useState } from 'react';

import { Menu } from 'antd';

export default function Nav() {
  const items = [
    { label: <Link href="/about">about</Link>, key: 'about' }, 
    { label: <Link href="/store">store</Link>, key: 'store' }, 
  ];
  const [current, setCurrent] = useState('store');

  const onMenu  = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onMenu} selectedKeys={[current]} items={items} mode="horizontal"/>;
}
