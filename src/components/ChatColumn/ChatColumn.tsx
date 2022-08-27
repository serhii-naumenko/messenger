import React from 'react';
import { Chat } from '../Chat/Chat';
import { ReturnContacts } from '../ReturnContacts';
import { Sender } from '../Sender';
import { Subscriber } from '../Subscriber';
import './ChatColumn.scss';

export const ChatColumn: React.FC = () => {
  return (
    <div
      className="ChatColumn"
    >
      <ReturnContacts />
      <Subscriber />
      <Chat />
      <Sender />
    </div>
  );
};
