import React from 'react';
import { PhotoCheck } from '../PhotoCheck';
import './Contacts.scss';
import Josefina from '../../images/josefina.png';
import Velazgquez from '../../images/velazgquez.png';

const listContacts = [
  {
    id: '1',
    name: 'Josefina',
    lastMessage: 'We are losing money! Quick!',
    lastTime: 'Feb 18, 2017',
    contactPhoto: `${Josefina}`,
  },
  {
    id: '2',
    name: 'Velazgquez',
    lastMessage: 'Quickly come to the meeting room 1B, we have a big server issue fffffffff ffffffffff ffffffff',
    lastTime: 'Mar 18, 2017',
    contactPhoto: `${Velazgquez}`,
  },
  {
    id: '3',
    name: 'Josefina',
    lastMessage: 'We are losing money! Quick!',
    lastTime: 'Feb 18, 2017',
    contactPhoto: `${Josefina}`,
  },
  {
    id: '4',
    name: 'Josefina',
    lastMessage: 'We are losing money! Quick!',
    lastTime: 'Feb 18, 2017',
    contactPhoto: `${Josefina}`,
  },
  {
    id: '5',
    name: 'Velazgquez',
    lastMessage: 'Quickly come to the meeting room 1B, we have a big server issue fffffffff ffffffffff ffffffff',
    lastTime: 'Mar 18, 2017',
    contactPhoto: `${Velazgquez}`,
  },
  {
    id: '6',
    name: 'Josefina',
    lastMessage: 'We are losing money! Quick!',
    lastTime: 'Feb 18, 2017',
    contactPhoto: `${Josefina}`,
  },
];

export const Contacts: React.FC = () => {
  return (
    <div className="Contacts">
      <h1 className="Contacts__title">
        Chats
      </h1>
      <ul className="Contacts__list">
        {listContacts.map((contact) => (
          <li
            className="Contacts__item"
            key={contact.id}
          >
            <button
              type="button"
              className="Contacts__button"
            >
              <PhotoCheck imageFace={contact.contactPhoto} />
              <div className="Contacts__info">
                <div className="Contacts__name-text">
                  <h3 className="Contacts__name">
                    {contact.name}
                  </h3>
                  <div className="Contacts__text-container">
                    <p className="Contacts__text">
                      {contact.lastMessage}
                    </p>
                  </div>
                </div>
                <p className="Contacts__date">
                  {contact.lastTime}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
