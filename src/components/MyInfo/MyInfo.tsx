import React, { useCallback, useState } from 'react';
import './MyInfo.scss';
import { useDispatch } from 'react-redux';
import { PhotoCheck } from '../PhotoCheck';
import { removeUser, setQueryForSearch } from '../../redux/ContactReducer';
import exit from '../../images/logout_icon.png';

export const MyInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handlerChangeInput = useCallback((newQuery) => {
    setQuery(newQuery.trim());
    dispatch(setQueryForSearch(newQuery.trim()));
  }, [query]);

  const handlerLogout = useCallback(() => {
    dispatch(removeUser());
  }, []);

  return (
    <div className="MyInfo">
      <div className="MyInfo__container">
        <PhotoCheck imageFace="assets/images/testimonial-ava-3.jpg" />
        <button
          type="button"
          title="log out"
          className="MyInfo__button"
          onClick={handlerLogout}
        >
          <img
            src={exit}
            alt="logout icon"
            className="MyInfo__icon"
          />
        </button>
      </div>
      <label htmlFor="search" className="MyInfo__search-groupe">
        <input
          title="find conact or chat"
          name="search"
          type="text"
          id="search"
          className="MyInfo__search"
          placeholder="Search or start new chat"
          value={query}
          onChange={(event) => handlerChangeInput(event.target.value)}
        />
        <div className="MyInfo__glass"></div>
      </label>
    </div>
  );
};
