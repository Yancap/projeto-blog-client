import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginStorage } from './context/LoginContext';
import { ArticleStorage } from './context/ArticleContext';
import { SearchStorage } from './context/SearchContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginStorage>
        <ArticleStorage>
          <SearchStorage>
            <App />
          </SearchStorage>
        </ArticleStorage>
      </LoginStorage>
    </BrowserRouter>
  </React.StrictMode>
);