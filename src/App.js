// import { dataService } from './formJson';
import Layout from './theme/layout';
import './App.css';

function App() {
  // const json = JSON.stringify(dataService.getForm(), null, 2222)
  return (
    <div className="App">
      <Layout />
      {/* <pre>{json}</pre> */}
    </div>
  );
}

export default App;
