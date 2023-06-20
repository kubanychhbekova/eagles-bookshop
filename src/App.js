import logo from './logo.svg';
import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
   <Header/>
      <Pages/>

      <Footer/>
    </div>
  );
}

export default App;
