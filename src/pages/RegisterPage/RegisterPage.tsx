import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './RegisterPage.scss';
import { FormAuthRegister } from '../../components/FormAuthRegister';
import { setUser } from '../../redux/ContactReducer';

export const RegisterPage: React.FC = () => {
  const [textError, setTextError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const newUser = {
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        };

        dispatch(setUser(newUser));
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/messenger');
      })
      .catch((Error) => {
        if (Error.message.includes('weak-password')) {
          setTextError('Password must have at least 6 characters');
        } else if (Error.message.includes('auth')) {
          setTextError('Please enter the correct email and password');
        } else {
          throw Error;
        }
      });
  };

  return (
    <div className="RegisterPage">
      <h1 className="RegisterPage__title">
        Register
      </h1>
      <FormAuthRegister
        title="register"
        textError={textError}
        handlerClick={handlerRegister}
      />
      <p className="RegisterPage__text">
        Already have an account?
      </p>
      <Link
        to="/"
        className="RegisterPage__link"
      >
        Sign in
      </Link>
    </div>
  );
};
