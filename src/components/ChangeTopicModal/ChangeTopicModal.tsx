import React from 'react';

type Props = {
  onCloseButton: () => void;
};

export const ChangeTopicModal: React.FC<Props> = React.memo(({ onCloseButton }) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title has-text-danger">Something went wrong</p>
        <button className="delete" aria-label="close" type="button" onClick={onCloseButton}></button>
      </header>
      <section className="modal-card-body">
        <h1 className="title">Due to newsapi pricing policy, this is all we can offer you. But you can change the topic</h1>
      </section>
      <footer className="modal-card-foot">
      </footer>
    </div>
  </div>
));
