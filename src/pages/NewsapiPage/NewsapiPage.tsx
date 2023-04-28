import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  increasePage, loadArticlesAsync, resetPage, setTopic,
} from '../../slices/apiArticlesSlice';
import { ApiArticle } from '../../components/ApiArticle';

export const NewsapiPage: React.FC = () => {
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
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Something went wrong</p>
            <button className="delete" aria-label="close" type="button" onClick={onCloseButton}></button>
          </header>
          <section className="modal-card-body">
            <h1 className="">Due to newsapi pricing policy, this is all we can offer you. But you can change the topic and try again</h1>
          </section>
          <footer className="modal-card-foot">
          </footer>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="title">Newsapi Articles</h1>

      <button className="button is-info" type="submit" onClick={onAddButton}>Add 10</button>

      <div className="select is-info ml-6">
        <select value={topic} onChange={handleSelectChange}>
          <option value="ukraine">Ukraine</option>
          <option value="apple">Apple</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="world">World</option>
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
};
