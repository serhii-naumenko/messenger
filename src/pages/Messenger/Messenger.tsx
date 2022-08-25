import React from 'react';
import './Messenger.scss';
import { Navigate } from 'react-router-dom';
import { Chat } from '../../components/Chat';
import { Contacts } from '../../components/Contacts';
import { MyInfo } from '../../components/MyInfo';
import { Sender } from '../../components/Sender';
import { Subscriber } from '../../components/Subscriber';
import { ReturnContacts } from '../../components/ReturnContacts';
import { useAuth } from '../../hooks/use-auth';

export const Messenger: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className="Messenger">
      <div
        className="Messenger__contact-groupe"
        id="contactsColumn"
      >
        <MyInfo />
        <Contacts />
      </div>
      <div
        className="Messenger__chat-groupe"
        id="chatColumn"
      >
        <ReturnContacts />
        <Subscriber />
        <Chat />
        <Sender />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
