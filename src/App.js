import './App.css';
import News from './Components/News';
import { useGlobalContext } from './context';
import SearchForm from './Components/SearchForm';
import Title from './Components/Title';
import Buttons from './Components/Buttons';

function App() {
  const data = useGlobalContext();

  return (
    <main>
      <Title />
      <SearchForm />
      <Buttons />
      <News />
    </main>
  );
}

export default App;
