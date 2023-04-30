import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  increasePage, loadArticlesAsync, resetPage, setTopic,
} from '../../slices/apiArticlesSlice';
import { ApiArticle } from '../../components/ApiArticle';
import { Topic } from '../../types/Topic';
import { ChangeTopicModal } from '../../components/ChangeTopicModal';

export const NewsapiPage: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.apiArticles.page);
  const topic = useAppSelector(state => state.apiArticles.topic);
  const [showModal, setShowModal] = useState(false);

  const info = {
    page,
    topic,
  };

  useEffect(() => {
    dispatch(loadArticlesAsync(info));
  }, [page, topic]);
  const apiArticles = useAppSelector(state => state.apiArticles.apiArticles);

  const onAddButton = () => {
    if (page === 10) {
      dispatch(resetPage());
      setShowModal(true);

      return;
    }

    dispatch(increasePage());
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    dispatch(setTopic(value));
    dispatch(resetPage());
  };

  const onCloseButton = () => {
    setShowModal(false);
  };

  if (showModal) {
    return (
      <ChangeTopicModal onCloseButton={onCloseButton} />
    );
  }

  return (
    <>
      <h1 className="title">Newsapi Articles</h1>

      <button className="button is-info" type="submit" onClick={onAddButton}>Add 10</button>

      <div className="select is-info ml-6">
        <select value={topic} onChange={handleSelectChange}>
          <option value={Topic.Ukraine}>Ukraine</option>
          <option value={Topic.Apple}>Apple</option>
          <option value={Topic.Bitcoin}>Bitcoin</option>
          <option value={Topic.World}>World</option>
        </select>
      </div>

      <div className="container mt-5">
        <div className="columns is-multiline">
          {apiArticles.map(article => {
            const {
              author, description, title, url, urlToImage, source,
            } = article;

            return (
              <ApiArticle
                key={url}
                author={author}
                description={description}
                title={title}
                urlToImage={urlToImage}
                source={source}
              />
            );
          })}
        </div>
      </div>
    </>
  );
});
