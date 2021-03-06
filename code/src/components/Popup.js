import React from 'react';

// ----------------------------------------------------------------

const Popup = ({ message, classNames }) => {
  return (
    <span className="form__popup__wrapper">
      <p className={classNames}>{message}</p>
      <span className="form__popup-tag" />
    </span>
  );
};
export default Popup;
