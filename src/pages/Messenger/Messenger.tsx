import React from 'react';
import './Messenger.scss';
import { Chat } from '../../components/Chat';
import { Contacts } from '../../components/Contacts';
import { MyInfo } from '../../components/MyInfo';
import { Sender } from '../../components/Sender';
import { Subscriber } from '../../components/Subscriber';

export const Messenger: React.FC = () => {
  return (
    <div className="Messenger">
      <div className="Messenger__contact-groupe">
        <MyInfo />
        <Contacts />
      </div>
      <div className="Messenger__chat-groupe">
        <Subscriber />
        <Chat />
        <Sender />
      </div>
    </div>
  );
};
