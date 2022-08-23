import React, { useEffect, useState } from 'react';
import './Subscriber.scss';
import { useSelector } from 'react-redux';
import { PhotoCheck } from '../PhotoCheck';
import { selectors } from '../../redux/reducer';

export const Subscriber: React.FC = () => {
  const chosenContactRedux = useSelector(selectors.chosenContact);
  const [chosenContact, setchosenContact] = useState(chosenContactRedux);

  useEffect(() => {
    const contact = chosenContactRedux;

    setchosenContact(contact);
  }, [chosenContactRedux]);

  return (
    <div className="Subscriber">
      <PhotoCheck imageFace={chosenContact.picture} />
      <h2 className="Subscriber__name">
        {chosenContact.name}
      </h2>
    </div>
  );
};
