import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './RegisterPage.scss';
import { FormAuthRegister } from '../../components/FormAuthRegister';
import { setUser } from '../../redux/ContactReducer';

export const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/messenger');
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  return (
    <div className="RegisterPage">
      <h1 className="RegisterPage__title">
        Register
      </h1>
      <FormAuthRegister
        title="register"
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
