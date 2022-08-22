import React from 'react';
import { AnswerFrom } from '../AnswerFrom';
import { MyReply } from '../MyReply';
import './Chat.scss';

import Josefina from '../../images/josefina.png';

const chosenContact = {
  lastMessage: 'Quickly come to the meeting room 1B, we have a big server issue fffffffffff fffffffffff ffffffffffff',
  // lastMessage: 'Quickly come to the meeting',
  lastTime: '02/18/2017 04:00 AM',
  contactPhoto: `${Josefina}`,
};

const myMassage = {
  text: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?',
  time: '02/18/2017 04:05 AM',
};

export const Chat: React.FC = () => {
  return (
    <div className="Chat">
      <AnswerFrom
        photoOfСompanion={chosenContact.contactPhoto}
        textCompanion={chosenContact.lastMessage}
        dateCompanion={chosenContact.lastTime}
      />
      <MyReply
        myText={myMassage.text}
        myTime={myMassage.time}
      />
      <AnswerFrom
        photoOfСompanion={chosenContact.contactPhoto}
        textCompanion={chosenContact.lastMessage}
        dateCompanion={chosenContact.lastTime}
      />
      <MyReply
        myText={myMassage.text}
        myTime={myMassage.time}
      />
      <AnswerFrom
        photoOfСompanion={chosenContact.contactPhoto}
        textCompanion={chosenContact.lastMessage}
        dateCompanion={chosenContact.lastTime}
      />
      <MyReply
        myText={myMassage.text}
        myTime={myMassage.time}
      />
    </div>
  );
};
