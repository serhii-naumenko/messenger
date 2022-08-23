import moment from 'moment';
import React from 'react';
import './MyReply.scss';

type Props = {
  myText: string,
  myTime: string,
};

export const MyReply: React.FC<Props> = ({
  myText,
  myTime,
}) => {
  return (
    <div className="MyReply">
      <div className="MyReply__text-container">
        <p className="MyReply__text">
          {myText}
        </p>
      </div>
      <p className="MyReply__time">
        {moment(`${myTime}`, 'M/DD/YY HH:mm:ss A').format('M/DD/YY HH:mm A')}
      </p>
    </div>
  );
};
