import { useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";

function App(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);


  return (
    <>
      <h1>Olá, Murilo!</h1>
      <img src="/img/manoel_gomes_natal.png" alt="Manoel Gomes Papai Noel" />
      <audio src="/audio/presente_murilo_manoel_gomes.m4a" controls />
      <h2>Pronto para receber seu presente?</h2>
      <div className="button-area">
        <Button visible={counter === 0} onClick={() => setCounter(counter + 1)}>
          <span>Clique aqui</span>
        </Button>
        <Button visible={counter === 1} onClick={() => setCounter(counter + 1)}>
          <span>Para receber</span>
        </Button>
        <Button visible={counter === 2} onClick={() => setCounter(counter + 1)}>
          <span>Seu presente</span>
        </Button>
        <Button visible={counter === 3} onClick={() => setCounter(counter + 1)}>
          <Link to="/presente" style={{ 
            textDecoration: 'none',
           }}>De Natal</Link>
        </Button>
      </div>
    </>
  );
}

export default App;
