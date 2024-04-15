import rickIcon from '../assets/dribble-rick.jpg';
import './Header.css';

export function Header() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="d-flex gap-2">
            <div className='overflow-hidden header-icon d-flex justify-content-center'>
                <img src={rickIcon} className='img-fluid'/>
            </div>
            <hgroup>
                <h2>Lista de personajes</h2>
            </hgroup>
        </div>
      </header>
    </div>
  );
}
