import './App.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Person Cards</h1>
      <Card firstName={'Killua'} lastName={'Zoldyck'} age={''} hairColor={'White'}/>
      <Card firstName={'Gon'} lastName={'Freecss'} age={''} hairColor={'Black and Green'}/>
      <Card firstName={'Isaac'} lastName={'Netero'} age={''} hairColor={'White'}/>
      <Card firstName={'Biscuit'} lastName={'Krueger'} age={''} hairColor={'Blonde'}/>
    </div>
  );
}

export default App;
