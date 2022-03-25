import './App.css';
import AddSpecies from "./components/addspecies";
import AddAnimal  from "./components/addanimal"
import AddSighting from "./components/addsighting"
import ListAll from "./components/listall"

function App() {
  return (
    <div className="App">
      Hello from Techtonica
      <h1>Add Species</h1>
      <AddSpecies />
      <br/>
      <h1>Add Animal</h1>
      <AddAnimal />
      <br/>
      <h1>Animal Sighting</h1>
      <AddSighting />
      <br/>
      <ListAll />
    </div>
  );
}

export default App;
