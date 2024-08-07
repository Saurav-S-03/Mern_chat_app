import './App.css';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Routes } from 'react-router';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage/>} exact></Route>
      <Route path='/chats' element={<ChatPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
