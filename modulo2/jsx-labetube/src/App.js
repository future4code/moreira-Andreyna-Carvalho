import './App.css';
import dbz from './img/dbz.jpg';
import naruto from './img/naruto.jpeg';
import soma from './img/shokugeki.jpg';

function App() {
  let titulo = 'Media 1';
  
  const click = () => {
    alert('Fui apertado!')
  }
  
  return (
    <div className="App">
      <header>
        <h1>LabeTube</h1>
        <input placeholder='Buscar'/>
      </header>

    <section>
        <nav className='lateral'>
          <ul>
            <li> Inicio </li>
            <li> Em alta </li>
            <li className='separacao'> Inscrições </li>
            <li> Originais </li>
            <li> Histórico </li>
          </ul>
        </nav>

        <div className='movie'>
          <div class="movie1" onClick={click}>
            <img src={dbz} alt="construct"/>
            <p> {titulo}</p>
          </div>
          <div class="movie1" onClick={click}>
            <img src={naruto} alt="construct"/>
            <p> {titulo}</p>
          </div>
            <div class="movie1" onClick={click}>
            <img src={soma} alt="construct"/>
            <p> {titulo}</p>
          </div>
          <div class="movie1" onClick={click}>
            <img src={dbz} alt="construct"/>
            <p> {titulo}</p>
          </div>
          <div class="movie1"  onClick={click}>
            <img src={naruto} alt="construct"/>
            <p> {titulo}</p>
          </div>
            <div class="movie1" onClick={click}>
            <img src={soma} alt="construct"/>
            <p> {titulo}</p>
          </div>
          <div class="movie1" onClick={click}>
            <img src={naruto} alt="construct"/>
            <p> {titulo}</p>
          </div>
            <div class="movie1" onClick={click}>
            <img src={soma} alt="construct"/>
            <p> {titulo}</p>
          </div>
        </div>
    </section>

    <footer>
        <h2>Oi! Eu moro no footer!!</h2>
    </footer>

    </div>
  );
}

export default App;
