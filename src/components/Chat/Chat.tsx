import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnswerFrom } from '../AnswerFrom';
import { MyReply } from '../MyReply';
import './Chat.scss';
import { selectors } from '../../redux/reducer';

import Josefina from '../../images/josefina.png';

export const Chat: React.FC = () => {
  const chosenContactRedux = useSelector(selectors.chosenContact);
  const [chosenContact, setchosenContact] = useState(chosenContactRedux);

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
        >
          {message.isAnswer && (
            <AnswerFrom
              photoOfСompanion={Josefina}
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
