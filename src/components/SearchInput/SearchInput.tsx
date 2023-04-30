import React, { useState } from 'react';
import { searchArticles } from '../../slices/myArticlesSlice';
import { useAppDispatch } from '../../store/hooks';

export const SearchInput: React.FC = React.memo(() => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

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
});
