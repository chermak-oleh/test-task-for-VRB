import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { ArticleList } from '../../components/ArticlesList';
import { SearchInput } from '../../components/SearchInput';

export const MyArticlesPage: React.FC = () => {
  const articles = useAppSelector(state => state.articles.articles);
  const query = useAppSelector(state => state.articles.searchQuery);
  const pinnedId = useAppSelector(state => state.articles.pinnedId);

  const pinnedArticle = articles.find(article => article.id === pinnedId);
  const articlesWithoutPinned = articles.filter(article => article.id !== pinnedId);

  const visibleArticles = pinnedArticle
    ? [pinnedArticle, ...articlesWithoutPinned].filter(article => {
      const { title, description } = article;
      const lowerTitle = title.toLowerCase();
      const lowerDesc = description.toLowerCase();

      return (lowerTitle.includes(query) || lowerDesc.includes(query));
    })
    : articles.filter(article => {
      const { title, description } = article;
      const lowerTitle = title.toLowerCase();
      const lowerDesc = description.toLowerCase();

      return (lowerTitle.includes(query) || lowerDesc.includes(query));
    });

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
