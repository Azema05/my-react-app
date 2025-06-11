import React from 'react';
type MessageProps = {
  text: string;
};
const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Message;