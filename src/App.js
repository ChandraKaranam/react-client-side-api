import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponet';
import HeaderComponet from './components/HeaderComponet';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponet />
      <div className="container">
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
