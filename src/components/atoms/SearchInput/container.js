import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import { INPUT_CHANGE, INPUT_ENTER } from './constants';
import './style.scss';

const Container = ({
  value,
  placeholder,
  handleEvent,
  className,
  style,
}) => {
  const jointedClassNames = classnames('search-input', className);
  const onChange = (event) => {
    return handleEvent({ command: INPUT_CHANGE, value: event.target.value });
  };
  const onKeyDown = (event) => {
    switch (event.keyCode) {
      case 13: // enter
        return handleEvent({ command: INPUT_ENTER });
      default:
        break;
    }
  };
  return (
    <div className='search'>
      <span className='fa fa-search'></span>
      <input
        className={jointedClassNames}
        type='search'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
        placeholder={placeholder}
      />
    </div>
  );
}
Container.defaultProps = {
  value: '',
  placeholder: '搜尋',
  className: '',
  style: {},
  handleEvent: () => {},
};
Container.propTypes = {
  value: T.string,
  placeholder: T.string,
  className: T.string,
  style: T.object,
  handleEvent: T.func,
};

export default Container;
