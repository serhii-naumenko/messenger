import React from 'react';
import { PhotoCheck } from '../PhotoCheck';
import './AnswerFrom.scss';

type Props = {
  photoOfСompanion: string,
  textCompanion: string,
  dateCompanion: string,
};

export const AnswerFrom: React.FC<Props> = ({
  photoOfСompanion,
  textCompanion,
  dateCompanion,
}) => {
  return (
    <div className="AnswerFrom">
      <div className="AnswerFrom__firstLine">
        <PhotoCheck imageFace={photoOfСompanion} />
        <div className="AnswerFrom__text-container">
          <p className="AnswerFrom__text">
            {textCompanion}
          </p>
        </div>
      </div>
      <p className="AnswerFrom__date">
        {dateCompanion}
      </p>
    </div>
  );
};
