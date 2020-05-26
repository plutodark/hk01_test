import React from 'react';
import HorizontalMenu from './';

export default { title: 'HorizontalMenu' };

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" },
  { name: "item15" },
  { name: "item16" },
  { name: "item17" },
  { name: "item18" },
  { name: "item19" },
  { name: "item20" },
  { name: "item21" },
  { name: "item22" },
  { name: "item23" },
  { name: "item24" },
  { name: "item25" }
];

const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

export const withDefault = () => (
  <HorizontalMenu
    items={Menu(list)}
  />
);
