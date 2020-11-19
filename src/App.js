import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage';
import './sass/index.sass';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
    </Router>
  );
}

export default App;
