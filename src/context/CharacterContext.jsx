import { createContext, useEffect, useState } from "react";
import { getCharacters } from "../services/characters";
import { usePromise } from "../hooks/usePromise";

export const CharacterContext = createContext(null);

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const {
    data,
    error,
    isLoading,
    refresh: loadCharacters,
  } = usePromise(getCharacters);

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data]);

  const deleteCharacter = (i) => {
    const newCharacters = characters.filter((_, index) => index !== i);
    setCharacters(newCharacters);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        deleteCharacter,
        loadCharacters,
        error,
        isLoading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
