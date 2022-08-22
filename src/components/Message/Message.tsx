import React, { useCallback, useEffect, useState } from 'react';
import { getAnswerFromChack } from '../../api/api';
import './Message.scss';

export const Message: React.FC = () => {
  const [answer, setAnswer] = useState('');

  const handlerSubmit = useCallback((event) => {
    event.preventDefault();
    async function response() {
      const answerChackServer = await getAnswerFromChack();
      const answerFromChack = {
        ...answerChackServer,
      };

      setAnswer(answerFromChack.value);
    }

    response();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(answer);
  }, [answer]);

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
