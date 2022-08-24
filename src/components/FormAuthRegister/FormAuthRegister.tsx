import React, { useCallback, useState } from 'react';
import './FormAuthRegister.scss';

type Props = {
  title: string,
  handlerClick: (email: string, passw: string) => void,
};

export const FormAuthRegister: React.FC<Props> = ({
  title,
  handlerClick,
}) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  const handlerChangeEmail = useCallback((newEmail) => {
    setEmail(newEmail);
  }, [email]);

  const handlerChangePassw = useCallback((newPassw) => {
    setPassw(newPassw);
  }, [passw]);

  return (
    <div className="FormAuthRegister">
      <input
        type="email"
        title="enter email"
        className="FormAuthRegister__email"
        placeholder="enter email"
        value={email}
        onChange={(event) => handlerChangeEmail(event.target.value)}
      />
      <input
        type="password"
        title="enter password"
        className="FormAuthRegister__passw"
        placeholder="enter password"
        value={passw}
        onChange={(event) => handlerChangePassw(event.target.value)}
      />
      <button
        type="button"
        className="FormAuthRegister__button"
        onClick={() => handlerClick(email, passw)}
      >
        {title}
      </button>
    </div>
  );
};
