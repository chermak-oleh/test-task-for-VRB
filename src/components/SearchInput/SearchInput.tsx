import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArticles } from '../../slice/myArticlesSlice';

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lowerQuery = value.toLowerCase();

    setQuery(lowerQuery);
    dispatch(searchArticles(lowerQuery));
  };

  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search Article..."
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
};
