import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { removeArticle, setPinnedId } from '../../slice/myArticlesSlice';
import { useAppSelector } from '../../store/hooks';

type Props = {
  id: number;
  author: string;
  title: string;
  description: string;
};

export const ArticleList: React.FC<Props> = ({
  id, author, description, title,
}) => {
  const dispatch = useDispatch();
  const pinnedId = useAppSelector(state => state.articles.pinnedId);

  const onRemoveButton = () => {
    dispatch(removeArticle(id));
  };

  const onPinButton = () => {
    dispatch(setPinnedId(id));
  };

  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <div className="box">
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png?20100406171642" alt="Slava Ukraini!" />
        <p className="is-italic">
          Author:
          {` ${author}`}
        </p>
        <h2 className="title">{title}</h2>
        <p className="has-text-weight-medium is-family-sans-serif">{description}</p>
        <div className="columns is-gapless is-mobile mt-3">
          <div className="column is-half">
            <button
              className={classNames(
                'button is-info is-fullwidth is-small mr-2',
                { 'is-success': pinnedId === id },
              )}
              type="button"
              onClick={onPinButton}
            >
              {pinnedId === id
                ? 'Pinned'
                : 'Pin'}
            </button>
          </div>
          <div className="column is-half">
            <button
              className="button is-danger is-fullwidth is-small ml-2"
              type="button"
              onClick={onRemoveButton}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
