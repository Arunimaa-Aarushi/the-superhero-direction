
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

function App() {
  return (
    <div>
      <Header></Header>

      <div className="container-fluid" >
        <Info></Info>

      </div>
    </div>
  );
}

export default App;
