import { Article } from '../types/Article';

export const getVisibleArticles = (articles: Article[], pinnedId: number | null, query: string) => {
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

  return visibleArticles;
};
