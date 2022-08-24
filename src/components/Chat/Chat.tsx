import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnswerFrom } from '../AnswerFrom';
import { MyReply } from '../MyReply';
import './Chat.scss';
import { selectors } from '../../redux/ContactReducer';

export const Chat: React.FC = () => {
  const chosenContactRedux = useSelector(selectors.chosenContact);
  const [chosenContact, setchosenContact] = useState(chosenContactRedux);
  const bottomRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView();
  }, [chosenContactRedux, chosenContact]);

  useEffect(() => {
    const contact = chosenContactRedux;

    setchosenContact(contact);
  }, [chosenContactRedux]);

  return (
    <ul className="Chat">
      {chosenContact.dialog.map((message, index) => (
        <li
          className="Chat__item"
          key={message.time}
          ref={bottomRef}
        >
          {message.isAnswer && (
            <AnswerFrom
              photoOfСompanion={chosenContactRedux.picture}
              textCompanion={chosenContact.dialog[index].text}
              dateCompanion={chosenContact.dialog[index].time}
            />
          )}
          {!message.isAnswer && (
            <MyReply
              myText={chosenContact.dialog[index].text}
              myTime={chosenContact.dialog[index].time}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
