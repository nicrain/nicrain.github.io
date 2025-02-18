// ChatRoom.js
import firebase from 'firebase/app'; // Import firebase from the Firebase SDK
import 'firebase/firestore'; // Import firestore from the Firebase SDK
import React, { useEffect, useState } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(data);
    });
    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await firebase.firestore().collection('messages').add({
        text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      setText('');
    } catch (error) {
      console.error('Error adding message: ', error);
    }
  };

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
