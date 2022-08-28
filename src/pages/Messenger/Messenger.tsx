import React, { useEffect } from 'react';
import './Messenger.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { ContactsColumn } from '../../components/ContactsColumn';
import { ChatColumn } from '../../components/ChatColumn';
import { selectors, setIsFirstDisplay } from '../../redux/ContactReducer';

export const Messenger: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const firstDisplay = useSelector(selectors.getIsFirstDisplay);

  useEffect(() => {
    const media = mediaQuery.matches;
    const first = firstDisplay;

    if (!media && isAuth && first) {
      dispatch(setIsFirstDisplay(false));
      navigate('/contactsColumn');
    }
  }, [firstDisplay]);

  return isAuth ? (
    <div className="Messenger">
      <ContactsColumn />
      <ChatColumn />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
