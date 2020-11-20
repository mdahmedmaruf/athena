import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import Footer from "./Home/Footer/Footer";
import Header from './Home/Header/Header';
import HomePage from './Home/HomePage';
import PricePage from "./Price/PricePage";
import './sass/index.sass';
import ServicePage from "./Services/ServicePage";
import TeamPage from "./Team/TeamPage";

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/services" component={ServicePage} exact />
          <Route path="/pricing" component={PricePage} exact />
          <Route path="/team" component={TeamPage} exact />
          <Route path="/contact" component={ContactPage} exact />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
