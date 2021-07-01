import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  const name='India'
  let x=false 
  return (
    <div className="App">
        <Header / >
        <h1>Jai Bharat</h1>
        <h2>Namste {name} </h2>
        <h3>X is:{x ? "Yes": "No" } </h3>
    </div>
  );
}

export default App;
