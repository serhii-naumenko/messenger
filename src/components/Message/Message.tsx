import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerFromChack } from '../../api/api';
import {
  selectors,
  setAnswerFromChack,
  setchosenContact,
  setcontactsInfo,
} from '../../redux/reducer';
import './Message.scss';

export const Message: React.FC = () => {
  const [query, setQuery] = useState('');
  // const [answer, setAnswer] = useState('');
  const contactsInfo = useSelector(selectors.loadedContactsInfo);
  const chosenContactRedux = useSelector(selectors.chosenContact);
  const dispatch = useDispatch();

  const handlerChangeInput = useCallback((newQuery) => {
    setQuery(newQuery);
  }, [query]);

  async function response() {
    const answerChackServer = await getAnswerFromChack();
    const answerFromChack = {
      ...answerChackServer,
    };

    // setAnswer(answerFromChack.value);
    dispatch(setAnswerFromChack(answerFromChack));
  }

  const handlerSubmit = useCallback((event) => {
    event.preventDefault();
    const myMessage = event.target[0].value;
    const oneContactRedux = { ...chosenContactRedux };
    const allContactsRedux = [...contactsInfo];

    if (myMessage.trim().length > 0) {
      response();
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

      const newContactsInfo = [
        updatedChosenContact,
        ...allContactsRedux.filter((contact) => oneContactRedux.id !== contact.id),
      ];

      dispatch(setchosenContact(updatedChosenContact));
      dispatch(setcontactsInfo(newContactsInfo));
      setQuery('');

      // eslint-disable-next-line no-console
      console.log(newContactsInfo);
    }
  }, [contactsInfo, chosenContactRedux]);

  return (
    <div className="Message">
      <form
        className="Message__form"
        onSubmit={(event) => handlerSubmit(event)}
      >
        <input
          title="enter text of message"
          name="message"
          type="text"
          className="Message__input"
          placeholder="Type your message"
          value={query}
          onChange={(event) => handlerChangeInput(event.target.value)}
        />
        <button
          className="Message__button"
          title="send message"
          type="submit"
        >
          <div className="Message__icon"></div>
        </button>
      </form>
    </div>
  );
};
