import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ArticleList } from '../../components/Article';
import { SearchInput } from '../../components/SearchInput';
import { initialArticles } from '../../initialArticles';
import { setArticles } from '../../slice/myArticlesSlice';
import { Article } from '../../types/Article';
import { getVisibleArticles } from '../../utils/getVisibleArticles';

export const MyArticlesPage: React.FC = () => {
  const articles = useAppSelector(state => state.articles.articles);
  const query = useAppSelector(state => state.articles.searchQuery);
  const pinnedId = useAppSelector(state => state.articles.pinnedId);
  const dispatch = useAppDispatch();
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);

  useEffect(() => {
    dispatch(setArticles(initialArticles));
  }, []);

  useEffect(() => {
    setVisibleArticles(getVisibleArticles(articles, pinnedId, query));
  }, [articles, pinnedId, query]);

  return (
    <>
      <h1 className="title">My Articles</h1>

      <SearchInput />

      <div className="container mt-5">
        <div className="columns is-multiline">
          {visibleArticles.map(article => {
            const {
              id, author, description, title,
            } = article;

            return (
              <ArticleList
                key={id}
                id={id}
                author={author}
                description={description}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
