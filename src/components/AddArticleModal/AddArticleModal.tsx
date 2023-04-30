import React from 'react';

type Props = {
  onCloseButton: () => void;
};

export const AddArticleModal: React.FC<Props> = React.memo(({ onCloseButton }) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Success</p>
        <button className="delete" aria-label="close" type="button" onClick={onCloseButton}></button>
      </header>
      <section className="modal-card-body">
        <h1 className="title has-text-success">Article added successfully</h1>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" type="button" onClick={onCloseButton}>Close</button>
      </footer>
    </div>
  </div>
));
