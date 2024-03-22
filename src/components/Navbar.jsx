import React, { lazy, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';

import { MenuOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: <a href='/start'>Start</a>,
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'Home',
            key: 'home',
          },
          {
            label: 'About Us',
            key: 'about',
          },
          {
            label: 'Skills',
            key: 'skills',
          },
          {
            label: 'Contact',
            key: 'contact',
          },
          {
            label: 'Projects',
            key: 'projects',
            children: [
                {
                    label: 'Project 1',
                    key: 'project 1',
                },
                {
                    label: 'Project 2',
                    key: 'project 2',
                },
                {
                    label: 'Project 3',
                    key: 'project 3',
                },
                {
                    label: 'Project 4',
                    key: 'project 4 ',
                },
            ]
          },
        ],
      },
      
    ],
  },
 
];


const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
        <div className="mobile_menu">
            <div className="menu" onClick={showDrawer}>
                <h2>LOGO</h2>
                <MenuOutlined />
            </div>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                >
                    <Menu selectedKeys={[current]} mode="inline" items={items} />
            </Drawer>
        </div>
        <div className="desktop_menu">
            <Menu className='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    </>
  )
};
export default Navbar;