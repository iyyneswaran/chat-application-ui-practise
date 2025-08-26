import './App.css';
import '@fontsource/outfit';
import Navbar from './components/Navbar';
import IconContainer from './components/IconContainer';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IconContainer />
      <Chat />
    </div>
  );
}

export default App;
