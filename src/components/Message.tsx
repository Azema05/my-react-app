// src/components/Message.tsx

import React from 'react';

// Определяем тип для пропсов — у нас будет одно поле "text" типа string
type MessageProps = {
  text: string;
};

// Компонент Message получает props и выводит текст
const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Message;