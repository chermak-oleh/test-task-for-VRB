import React from 'react';
import { Route, Routes } from 'react-router';
import { NavBar } from './components/NavBar/NavBar';
import { MyArticlesPage } from './pages/MyArticlesPage';
import { NewsapiPage } from './pages/NewsapiPage';
import { AddArticleForm } from './components/AddArticleForm';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <section className="section">
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<MyArticlesPage />} />
            <Route path="/addarticle" element={<AddArticleForm />} />
            <Route path="/newsapi" element={<NewsapiPage />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
