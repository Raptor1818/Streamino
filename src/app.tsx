import React from 'react';
import { createRoot } from 'react-dom/client';

import "./app.css";

const App = () => {
  return (
    <div>
      <p>ciao bel</p>
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
