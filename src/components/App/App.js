import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchBarResults from '../SearchBarResults/SearchBarResults.js';
import Playlist from '../Playlist/Playlist.js';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Ja<span className="highlight">mmm</span>ing
        </h1>
      </header>
      <main className = "App-main" id = "App-background">
        <SearchBar className = "App-searchBar"/>
        <div className='content'> 
          <SearchBarResults />
          <Playlist />
        </div>
        
      </main>
    </div>
  );
}

export default App;
