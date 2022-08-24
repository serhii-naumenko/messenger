import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoCheck } from '../PhotoCheck';
import './Contacts.scss';
import { selectors, setchosenContact } from '../../redux/ContactReducer';

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
  }, [querySearch, startContactsInfo]);

  const handlerChoseContact = useCallback((index) => {
    const previousContactsInfo = startContactsInfo;
    const contactForDialog = previousContactsInfo.find((prevContact) => {
      return +prevContact.id === index;
    });

    if (contactForDialog) {
      dispatch(setchosenContact(contactForDialog));
      localStorage.setItem('chosenContact', JSON.stringify(contactForDialog));
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
              <PhotoCheck imageFace={contact.picture} />
              <div className="Contacts__info">
                <div className="Contacts__name-text">
                  <h3 className="Contacts__name">
                    {contact.name}
                  </h3>
                  <div className="Contacts__text-container">
                    <p className="Contacts__text">
                      {contact.dialog[contact.dialog.length - 1].text}
                    </p>
                  </div>
                </div>
                <p className="Contacts__date">
                  {moment(`${contact.dialog[contact.dialog.length - 1].time}`, 'M/DD/YY HH:mm a').format('MMM DD, YYYY')}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
