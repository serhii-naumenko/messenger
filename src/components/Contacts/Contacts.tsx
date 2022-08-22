import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoCheck } from '../PhotoCheck';
import './Contacts.scss';
import alice from '../../images/alice.png';
import josefina from '../../images/josefina.png';
import velazgquez from '../../images/velazgquez.png';
import borrera from '../../images/barrera.png';
import { selectors, setchosenContact } from '../../redux/reducer';

const startPictures = [alice, josefina, velazgquez, borrera];

export const Contacts: React.FC = () => {
  const startContactsInfo = useSelector(selectors.loadedContactsInfo);
  const querySearch = useSelector(selectors.queryForSearch);
  const [contactsToRender, setContactsToRender] = useState(startContactsInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = querySearch;
    const visibleContacts = startContactsInfo.filter((contact) => contact.name
      .toUpperCase().includes(query.toUpperCase()));

    setContactsToRender(visibleContacts);
  }, [querySearch]);

  const handlerChoseContact = useCallback((index) => {
    const previousContactsInfo = startContactsInfo;
    const contactForDialog = previousContactsInfo.find((prevContact) => {
      return +prevContact.id === index;
    });

    if (contactForDialog) {
      dispatch(setchosenContact(contactForDialog));
    }
  }, [startContactsInfo]);

  return (
    <div className="Contacts">
      <h1 className="Contacts__title">
        Chats
      </h1>
      <ul className="Contacts__list">
        {contactsToRender.map((contact) => (
          <li
            className="Contacts__item"
            key={contact.id}
          >
            <button
              type="button"
              className="Contacts__button"
              onClick={() => handlerChoseContact(+contact.id)}
            >
              <PhotoCheck imageFace={startPictures[+contact.id - 1]} />
              <div className="Contacts__info">
                <div className="Contacts__name-text">
                  <h3 className="Contacts__name">
                    {contact.name}
                  </h3>
                  <div className="Contacts__text-container">
                    <p className="Contacts__text">
                      {contact.dialog[0].text}
                    </p>
                  </div>
                </div>
                <p className="Contacts__date">
                  {contact.dialog[0].time}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
