import { useContext } from "react";
import { CharacterListElement } from "./CharacterListElement";
import { CharacterContext } from "../context/CharacterContext";

export function CharacterList({ characters }) {
  const { deleteCharacter } = useContext(CharacterContext);
  return (
    <div class="py-5 bg-body-tertiary">
      <div class="container px-0 px-md-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {characters.map((ch, i) => {
                return <CharacterListElement character={ch} key={ch.id} onDelete={() => deleteCharacter(i)} />;
            })}
        </div>
      </div>
    </div>
  );
}
