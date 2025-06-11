// src/App.tsx

import React from 'react';
import Message from './components/Message'; // Импортируем наш новый компонент

const App: React.FC = () => {
  // Создаем константу с текстом
  const messageText = 'Привет! Это сообщение передано через пропс.';

  return (
    <div>
      <h1>Моё приложение на Vite + React + TypeScript</h1>

      {/* Рендерим компонент Message и передаем текст через пропс */}
      <Message text={messageText} />
    </div>
  );
};

export default App;