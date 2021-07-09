import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import DonutData from './data/DonutData';
import DrinkData from './data/DrinkData'

function App() {
  //Destructure data to pass down
  const { donuts } = DonutData;
  const { drinks } = DrinkData;
  //Set state 

  return (
    <BrowserRouter>
      <div className="App">
        <Main 
          donuts={donuts}
          drinks={drinks}

        />
      </div>
    </BrowserRouter>
  );
}

export default App;
