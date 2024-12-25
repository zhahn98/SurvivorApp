// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>SURVIVOR APP!</h1>
    <h6>Assemble a cast of previous Survivor players and see how it could all play out!</h6>
    <button class="btn btn-danger" id="click-me">Castaway List</button><br />
    <hr />
    <i class="fas fa-fire fa-4x"></i> <i class="fas fa-fire fa-4x"></i> <i class="fas fa-fire fa-4x"></i> <i class="fas fa-fire fa-4x"></i> <i class="fas fa-fire fa-4x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
