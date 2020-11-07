import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponet';
import HeaderComponet from './components/HeaderComponet';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>

      <HeaderComponet />
      <div className="container">
        <Switch>
          <Route path="/" component={ListEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <ListEmployeeComponent />
        </Switch>
      </div>
      <FooterComponent />

    </Router>
  );
}

export default App;
