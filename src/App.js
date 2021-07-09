import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import DonutData from './data/DonutData';

function App() {
  const { donuts } = DonutData;
  return (
    <BrowserRouter>
      <div className="App">
        <Main 
          donuts={donuts}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
