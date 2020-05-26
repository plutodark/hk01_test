import React from 'react';
import T from 'prop-types';
import ScrollMenu from "react-horizontal-scrolling-menu";
// https://codesandbox.io/s/lpjol1opmq?file=/src/index.js:0-8253
import './style.scss';

const Arrow = ({ text, className }) => (<div className={className}>{text}</div>);

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const HorizontalMenu = ({ items, onSelect }) => {
  return (
    <ScrollMenu
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      alignCenter={false}
      data={items}
      dragging
      hideArrows
      hideSingleArrow
      onSelect={onSelect}
      transition={0.5}
      wheel
    />
  );
};

HorizontalMenu.defaultProps = {
  items: [],
  onSelect: () => {},
};
HorizontalMenu.propTypes = {
  items: T.array,
  onSelect: T.func,
};

export default HorizontalMenu;
