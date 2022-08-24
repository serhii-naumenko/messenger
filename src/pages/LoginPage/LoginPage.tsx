import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FormAuthRegister } from '../../components/FormAuthRegister';
import './LoginPage.scss';
import { setUser } from '../../redux/ContactReducer';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // eslint-disable-next-line no-console
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/messenger');
      })
      // eslint-disable-next-line no-console, no-alert
      .catch(() => alert('Invalid User'));
  };

  return (
    <div className="LoginPage">
      <h1 className="LoginPage__title">Login</h1>
      <FormAuthRegister
        title="sign in"
        handlerClick={handlerLogin}
      />
      <p className="LoginPage__text">
        Or
      </p>
      <Link
        to="/register"
        className="LoginPage__link"
      >
        register
      </Link>
    </div>

  );
};
