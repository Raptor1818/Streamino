import React from 'react';
import { createRoot } from 'react-dom/client';

import "./app.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='body-container'>
        <Sidebar />
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}

export default App;
