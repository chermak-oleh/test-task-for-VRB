/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addArticle } from '../../slice/myArticlesSlice';
import { AddArticleModal } from '../AddArticleModal';

export const AddArticleForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(state => state.articles.articles);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getNewId = () => (
    Math.max(
      ...articles.map(article => article.id),
    ) + 1
  );

  const addNewArticle = () => {
    const trimmedAuthor = author.trim();
    const trimmedTitle = title.trim();
    const trimmedDesc = description.trim();

    const newArticle = {
      id: getNewId(),
      author: trimmedAuthor,
      title: trimmedTitle,
      description: trimmedDesc,
    };

    dispatch(addArticle(newArticle));
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setAuthor(value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setDescription(value);
  };

  const clearForm = () => {
    setAuthor('');
    setTitle('');
    setDescription('');
    setError(false);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!author || !title || !description) {
      setError(true);

      return;
    }

    addNewArticle();
    clearForm();
    setShowModal(true);
  };

  const onCloseButton = () => {
    setShowModal(false);
  };

  const titleErrorCondition = !title && error;
  const authorErrorCondition = !author && error;
  const descErrorCondition = !description && error;

  if (showModal) {
    return (<AddArticleModal onCloseButton={onCloseButton} />);
  }

  return (
    <>
      <h1 className="title">Add Article</h1>
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="What is your name?"
              value={author}
              onChange={handleAuthorChange}
            />
            {authorErrorCondition && (
              <span className="has-text-danger">Please enter your name</span>
            )}
          </div>
        </div>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Article title"
              value={title}
              onChange={handleTitleChange}
            />
            {titleErrorCondition && (
              <span className="has-text-danger">Please enter a title</span>
            )}
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Desctription"
              value={description}
              onChange={handleDescriptionChange}
            />
            {descErrorCondition && (
              <span className="has-text-danger">Please enter a description</span>
            )}
          </div>
        </div>

        <button className="button is-info" type="submit">Add Article</button>
      </form>
    </>
  );
};
