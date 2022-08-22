import React, { useState } from 'react';
import './MyInfo.scss';
import myFace from '../../images/testimonial-ava-3.jpg';
import { PhotoCheck } from '../PhotoCheck';

export const MyInfo: React.FC = () => {
  const [query, setQuery] = useState('');

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
        />
        <div className="MyInfo__glass"></div>
      </label>
    </div>
  );
};
