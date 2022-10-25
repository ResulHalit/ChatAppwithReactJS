import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
  return (
    <ChatEngine
    height='100vh0'
    projectID="49964739-f3bd-49ea-90e8-e047f865897c"
    userName="Resulhalit"
    userSecret="987654321"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )



};

export default App;
