import React from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FormAuthRegister } from '../../components/FormAuthRegister';
import './LoginPage.scss';
import { setUser } from '../../redux/ContactReducer';
import googleIcon from '../../images/google_icon.png';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/messenger');
      })
      // eslint-disable-next-line no-console, no-alert
      .catch(() => alert('Your login or password is incorrect'));
  };

  const handlerGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/messenger');
      })
      // eslint-disable-next-line no-console, no-alert
      .catch(() => alert('Your login or password is incorrect'));
  };

  return (
    <div className="LoginPage">
      <h1
        className="LoginPage__title"
      >
        To launch Messenger please log in
      </h1>
      <FormAuthRegister
        title="sign in"
        handlerClick={handlerLogin}
      />
      <button
        type="button"
        className="LoginPage__button"
        onClick={handlerGoogle}
      >
        <img
          src={googleIcon}
          alt="google icon"
          className="LoginPage__google"
        />
        Login with google
      </button>
      <Link
        to="/register"
        className="LoginPage__link"
      >
        or sign up
      </Link>
    </div>

  );
};
