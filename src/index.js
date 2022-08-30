import React from 'react';
import ReactDOM from 'react-dom/client';
import Collapse from "./components/Collapse";


const root = ReactDOM.createRoot(document.getElementById('root'));
const text = 'collapse me';
const opened = true

root.render(
  <React.StrictMode>
    <Collapse text={text} opened={opened}/>
  </React.StrictMode>
);