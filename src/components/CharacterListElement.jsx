export function CharacterListElement({ character, onDelete }) {
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img
          class="card-img-top"
          src={character.image}
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <div class="card-body">
          <h5 class="card-title">{character.species}</h5>
          <p class="card-text">
            <strong>{character.name}</strong>
            <div>
                <span>
                    <i className={`bi bi-gender-${character.gender}`}></i>
                    {character.gender}
                </span>
            </div>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <a href={character.url} type="button" class="btn btn-sm btn-outline-info">
                View
              </a>
              <button type="button" class="btn btn-sm btn-outline-danger" onClick={onDelete}>
                Delete
              </button>
            </div>
            <small class="text-body-secondary">
                <a href={character.location.url}>
                    {character.location.name}
                </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
