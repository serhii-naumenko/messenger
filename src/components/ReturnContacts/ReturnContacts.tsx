import React from 'react';
import './ReturnContacts.scss';
import { Link } from 'react-router-dom';
import leftArrow from '../../images/left_arrow.png';

export const ReturnContacts: React.FC = () => {
  return (
    <div className="ReturnContacts">
      <Link
        to="/contactsColumn"
        className="ReturnContacts__link"
      >
        <img
          src={leftArrow}
          alt="return to contacts sign"
          className="ReturnContacts__arrow"
        />
      </Link>
    </div>
  );
};
