import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Dinner></Dinner> */}
        <Dinner dishname="nihari" sweetDish="kheer"/>
        <hr></hr>
        <Dinner dishname="biryani" sweetDish="gajar halwa"/>
        <hr></hr>
        <Dinner dishname="karahi" sweetDish="jalebi"/>
        <hr></hr>
        {/* <h1><emp><strong>Hello World</strong></emp></h1> */}
      </header>
    </div>
  );
}

export default App;
