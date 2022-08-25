import React from 'react';
import './ReturnContacts.scss';
import leftArrow from '../../images/left_arrow.png';

export const ReturnContacts: React.FC = () => {
  return (
    <div className="ReturnContacts">
      <a
        href="#contactsColumn"
        className="ReturnContacts__link"
      >
        <img
          src={leftArrow}
          alt="return to contacts sign"
          className="ReturnContacts__arrow"
        />
      </a>
    </div>
  );
};
