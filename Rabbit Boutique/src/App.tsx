import React, { useState } from 'react';
import { ChatList } from './components/ChatList';
import { ChatWindow } from './components/ChatWindow';

function App() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="h-screen flex bg-white">
      <ChatList onSelectChat={setSelectedChat} />
      <ChatWindow chatId={selectedChat} />
    </div>
  );
}

export default App;