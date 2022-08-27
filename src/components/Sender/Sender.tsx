import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerFromChack } from '../../api/api';
import { OneContactInfo } from '../../OneContactInfoType';
import {
  selectors,
  setAnswerFromChack,
  setchosenContact,
  setcontactsInfo,
} from '../../redux/ContactReducer';
import './Sender.scss';

export const Sender: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const contactsInfo = useSelector(selectors.loadedContactsInfo);
  const chosenContactRedux = useSelector(selectors.chosenContact);
  const dispatch = useDispatch();

  const handlerChangeInput = useCallback((newQuery) => {
    setQuery(newQuery);
  }, [query]);

  const getAnswer = useCallback((contactToUpdate, nextAnswer) => {
    const allContactsRedux = [...contactsInfo];

    setTimeout(() => {
      const updatedChosenContact2 = {
        ...contactToUpdate,
        dialog: [
          ...contactToUpdate.dialog,
          {
            isAnswer: true,
            text: nextAnswer,
            time: moment().format('M/DD/YY HH:mm:ss A'),
          },
        ],
      };

      const newContactsInfo2 = [
        updatedChosenContact2,
        ...allContactsRedux.filter((contact) => contactToUpdate.id !== contact.id),
      ];

      dispatch(setchosenContact(updatedChosenContact2));
      dispatch(setcontactsInfo(newContactsInfo2));
      localStorage.setItem('contacts', JSON.stringify(newContactsInfo2));
    }, 10000);
  }, [contactsInfo, chosenContactRedux, answer]);

  async function response(updatedChosenContact: OneContactInfo) {
    const answerChackServer = await getAnswerFromChack();
    const answerFromChack = {
      ...answerChackServer,
    };

    setAnswer(answerFromChack.value);
    dispatch(setAnswerFromChack(answerFromChack.value));
    getAnswer(updatedChosenContact, answerFromChack.value);
  }

  const handlerSubmit = useCallback((event) => {
    event.preventDefault();
    const myMessage = event.target[0].value;
    const oneContactRedux = { ...chosenContactRedux };
    const allContactsRedux = [...contactsInfo];

    if (myMessage.trim().length > 0) {
      const updatedChosenContact = {
        ...oneContactRedux,
        dialog: [
          ...oneContactRedux.dialog,
          {
            isAnswer: false,
            text: myMessage,
            time: moment().format('M/DD/YY HH:mm:ss A'),
          },
        ],
      };

      response(updatedChosenContact);

      const newContactsInfo = [
        updatedChosenContact,
        ...allContactsRedux.filter((contact) => oneContactRedux.id !== contact.id),
      ];

      dispatch(setchosenContact(updatedChosenContact));
      dispatch(setcontactsInfo(newContactsInfo));
      setQuery('');
      localStorage.setItem('contacts', JSON.stringify(newContactsInfo));
    }
  }, [contactsInfo, chosenContactRedux]);

  return (
    <div className="Sender">
      <form
        className="Sender__form"
        onSubmit={(event) => handlerSubmit(event)}
      >
        <input
          title="enter text of message"
          name="sender"
          type="text"
          className="Sender__input"
          placeholder="Type your message"
          value={query}
          onChange={(event) => handlerChangeInput(event.target.value)}
        />
        <button
          className="Sender__button"
          title="send message"
          type="submit"
        >
          <div className="Sender__icon"></div>
        </button>
      </form>
    </div>
  );
};
