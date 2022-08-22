import React from 'react';
import './App.scss';
import { Chat } from './components/Chat';
import { Contacts } from './components/Contacts';
import { Message } from './components/Message';
import { MyInfo } from './components/MyInfo';
import { Subscriber } from './components/Subscriber';

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__contact-groupe">
        <MyInfo />
        <Contacts />
      </div>
      <div className="App__chat-groupe">
        <Subscriber />
        <Chat />
        <Message />
      </div>
    </div>
  );
};
