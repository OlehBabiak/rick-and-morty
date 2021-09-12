import './App.css';
import Header from "./components/header/Header";
import Routes from "./components/Routes";
import {Container} from "./components/characters/ItemsListStyled";

function App() {
  return (
    <Container>
      <Header/>
        <div>
            <Routes/>
        </div>
    </Container>
  );
}

export default App;
