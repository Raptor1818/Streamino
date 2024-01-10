import React from 'react';
import { createRoot } from 'react-dom/client';

import "./app.css";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
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
