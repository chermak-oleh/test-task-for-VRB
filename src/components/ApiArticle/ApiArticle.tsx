import React from 'react';
import { Source } from '../../types/Source';

type Props = {
  author: string;
  source: Source;
  title: string;
  description: string;
  urlToImage: string | null;
};

export const ApiArticle: React.FC<Props> = ({
  author, description, title, urlToImage, source,
}) => {
  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <div className="box" style={{ height: '600px', overflow: 'auto' }}>
        <img className="image" src={urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png?20100406171642'} alt="Slava Ukraini!" />
        <p className="is-italic">
          Author:
          {` ${author || source.name}`}
        </p>
        <h2 className="title">{title}</h2>
        <p className="has-text-weight-medium is-family-sans-serif">{description}</p>
      </div>
    </div>
  );
};
