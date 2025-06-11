import React from 'react';
import Message from './components/Message';

const App: React.FC = () => {
  const messageText = 'Пропс'

  return (
    <div>
      <h1>Моё приложение на Vite + React + TypeScript</h1>
      {}
      <Message text={messageText} />
    </div>
  );
};

export default App;