import React from 'react';
import { Contacts } from '../Contacts/Contacts';
import { MyInfo } from '../MyInfo';
import './ContactsColumn.scss';

export const ContactsColumn: React.FC = () => {
  return (
    <div className="ContactsColumn">
      <MyInfo />
      <Contacts />
    </div>
  );
};
