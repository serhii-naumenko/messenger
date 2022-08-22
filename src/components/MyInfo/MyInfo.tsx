import React, { useCallback, useState } from 'react';
import './MyInfo.scss';
import { useDispatch } from 'react-redux';
import myFace from '../../images/testimonial-ava-3.jpg';
import { PhotoCheck } from '../PhotoCheck';
import { setQueryForSearch } from '../../redux/reducer';

export const MyInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handlerChangeInput = useCallback((newQuery) => {
    setQuery(newQuery.trim());
    dispatch(setQueryForSearch(newQuery.trim()));
  }, [query]);

  return (
    <div className="MyInfo">
      <div className="MyInfo__container">
        <PhotoCheck imageFace={myFace} />
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
