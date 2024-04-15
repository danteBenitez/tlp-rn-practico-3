import './App.css'
import { CharacterList } from './components/CharacterList.jsx';
import { Header } from './components/Header.jsx';
import { useContext, useState } from 'react';
import { CharacterContext } from './context/CharacterContext.jsx';

function App() {
  const [charactersLoaded, setCharactersLoaded] = useState(false); 
  const { error, isLoading, characters, loadCharacters } = useContext(CharacterContext);

  const handleClick = () => {
    setCharactersLoaded(true);
    loadCharacters();
  };

  return (
    <>
      <Header />
      <main className=''>
        {!charactersLoaded && <button className="btn btn-primary" onClick={handleClick}>Cargar personajes</button>}
        {isLoading && <p>Cargando...</p>}
        {error && <p className="display-5 text-danger">Error: {error.message}</p>}
        {characters.length != 0 && <CharacterList characters={characters} />}
      </main>
    </>
  )
}

export default App
