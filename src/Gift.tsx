import { useEffect, useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";

function Gift(): JSX.Element {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1500);
  }, []);

  return (
    <>
      <h1>Aqui está o seu presente!</h1>
      <img src={isButtonClicked ? "/img/mousepad.jpg" : "/img/nadador.jpg"} alt="Nadador" />
      <h2>{isButtonClicked ? 'Um mousepad gamer! :D' : 'NADA!'}</h2>
      
      {!isButtonClicked 
        ? <Button visible={isButtonVisible} onClick={() => setIsButtonClicked(true)}>
          <span>Agora é sério. Clica aqui :D</span>
        </Button>
        : <>
            <p>
              <a href="https://a.co/d/iOVUxNy">Clique aqui para ver o produto</a>
            </p>
            <p>Infelizmente, não vai chegar a tempo do Natal, já que:</p>
            <img src="/img/correios_meme.jpg" alt="Os entregadores estão jogando sinuca com o seu produto" />
            <p>Mas um dia chega!</p>
            <Button>
              <Link to="/bastidores" style={{
                textDecoration: 'none',
              }}>Bastidores da criação do site</Link>
            </Button>
          </>
      }
    </>
  );
}

export default Gift;
