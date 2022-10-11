import logo from './logo.svg';
import './App.css';
import Navr from './copmponents/navr/Navr';
import Card from './copmponents/card/Card';
import Rechart from './copmponents/rechart/Rechart';
import Phonebar from './copmponents/phonebar/Phonebar';

function App() {
  return (
    <div className="App">
   
     <Navr></Navr>
     <Card></Card>
     <Rechart></Rechart>
     <Phonebar></Phonebar>
   
    </div>
  );
}

export default App;
