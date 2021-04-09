import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* body */}
      <BrowserRouter>
        {/* header */}
        <Header />

        {/* Body */}
        <section id="mainContent">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </section>
      </BrowserRouter>
      {/* footer */}
    </div>
  );
}

export default App;
