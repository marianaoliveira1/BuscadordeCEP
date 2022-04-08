import { FiSearch } from 'react-icons/fi'
import './styles/styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP..." />
      
      <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/>
      </button>
      </div>

      <main className='main'>
        <h2>CEP: 898904</h2>
        <span>Rua tal</span>
        <span>Complemento tal</span>
        <span>Bairro tal</span>
        <span>Fortaleza - CE</span>
      </main>

    </div>
  );
}

export default App;
