import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { Article as ArticleCard } from '../../components/Article';
import { SearchInput } from '../../components/SearchInput';
import { Article } from '../../types/Article';
import { getVisibleArticles } from '../../utils/getVisibleArticles';

export const MyArticlesPage: React.FC = () => {
  const articles = useAppSelector(state => state.articles.articles);
  const query = useAppSelector(state => state.articles.searchQuery);
  const pinnedId = useAppSelector(state => state.articles.pinnedId);
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);

  useEffect(() => {
    setVisibleArticles(getVisibleArticles(articles, pinnedId, query));
  }, [articles, pinnedId, query]);

  if (!articles.length) {
    return (
      <>
        <h1 className="title">My Articles</h1>
        <h1>
          There is no articles yet.
          <Link to="/addarticle"> Add some!</Link>
        </h1>
      </>
    );
  }

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
              <ArticleCard
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
