import React from 'react';
import './Messenger.scss';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { ContactsColumn } from '../../components/ContactsColumn';
import { ChatColumn } from '../../components/ChatColumn';

export const Messenger: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className="Messenger">
      <ContactsColumn />
      <ChatColumn />
    </div>
  ) : (
    <Navigate to={`${process.env.PUBLIC_URL}/`} />
  );
};
