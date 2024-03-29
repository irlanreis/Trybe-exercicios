import './App.css';
import { useEffect, useState } from 'react';
import messagesList from './data/messagesList';
import List from './components/List';
import { READ, UNREAD } from './constants';
import Controls from './components/Controls';

function App() {
  const [messages, setMessages] = useState(messagesList);
  
  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
    if (isAllMessagesRead) {
      alert("Parabéns! Você leu todas suas mensagens!");
    };
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const upDatedMessages = messages.map((currentMessage) => (
      currentMessage.id === messageId ? {
        ...currentMessage, status: newStatus } : currentMessage
    ));

    setMessages(upDatedMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({ ...message, status: READ }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((message) => ({ ...message, status: UNREAD }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
