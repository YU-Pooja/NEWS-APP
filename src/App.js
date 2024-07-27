import './App.css';
import Navbar from './components/Navbar.jsx';
import News from './components/News'
import { Provider } from 'react-redux'
import store from './store/index.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App font-mono bg-[#E5EDF1]">
        <Navbar />
        <News />
      </div>
    </Provider>
  );
}

export default App;