import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);
