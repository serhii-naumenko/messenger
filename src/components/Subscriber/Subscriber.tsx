import React from 'react';
import './Subscriber.scss';
import Josefina from '../../images/josefina.png';
import { PhotoCheck } from '../PhotoCheck';

const chosenContact = {
  name: 'Josefina',
  contactPhoto: `${Josefina}`,
};

export const Subscriber: React.FC = () => {
  return (
    <div className="Subscriber">
      <PhotoCheck imageFace={chosenContact.contactPhoto} />
      <h2 className="Subscriber__name">
        {chosenContact.name}
      </h2>
    </div>
  );
};
