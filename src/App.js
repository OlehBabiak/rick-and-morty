import './App.css';
import Header from "./components/header/Header";
import Rotes from "./components/Rotes";
import {Container} from "./components/characters/ItemsListStyled";

function App() {
  return (
    <Container>
      <Header/>
        <div>
            <Rotes/>
        </div>
    </Container>
  );
}

export default App;
