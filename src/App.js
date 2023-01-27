import { dataService } from './formJson';
import './App.css';

function App() {
  const json = JSON.stringify(dataService.getForm(), null, 2222)
  return (
    <div className="App">
      Hello Json Builder <br /> <br /><hr></hr>
      <pre>{json}</pre>
    </div>
  );
}

export default App;
