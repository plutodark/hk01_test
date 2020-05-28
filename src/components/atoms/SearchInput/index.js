import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import T from 'prop-types';
import Container from './container';
import { changeValue, resetPaging } from '../../../store/common/actions';
import { INPUT_CHANGE } from './constants';

const SearchInput = ({
  placeholder,
  className,
  style,
}) => {
  const value = useSelector((state) => state.getIn(['common', 'search']));
  const dispatch = useDispatch();
  const onEvent = ({ command, value}) => {
    switch (command) {
      case INPUT_CHANGE:{
        dispatch(resetPaging());
        return dispatch(changeValue(value));
      }
      default:
        break;
    }
  };
  return (
    <Container
      value={value}
      placeholder={placeholder}
      handleEvent={onEvent}
      className={className}
      style={style}
    />
  );
}
SearchInput.defaultProps = {
  value: '',
  placeholder: '搜尋',
  className: '',
  style: {},
  handleEvent: () => {},
};
SearchInput.propTypes = {
  value: T.string,
  placeholder: T.string,
  className: T.string,
  style: T.object,
  handleEvent: T.func,
};

export default SearchInput;
