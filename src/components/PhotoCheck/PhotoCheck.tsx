import React from 'react';
import './PhotoCheck.scss';

type Props = {
  imageFace: string,
};

export const PhotoCheck: React.FC<Props> = ({ imageFace }) => {
  return (
    <div className="PhotoCheck">
      <div className="PhotoCheck__icon"></div>
      <div className="PhotoCheck__photo">
        <img
          src={imageFace}
          alt="face of contact"
          className="PhotoCheck__image"
        />
      </div>
    </div>
  );
};
