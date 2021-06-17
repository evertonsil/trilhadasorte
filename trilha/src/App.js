import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Pacotes from "./components/Pacotes";

function App() {
  return (
    <div className="App">
      <Header />
      <Numbers />
      <Header />
      <Pacotes />
      <Footer />
    </div>
  );
}

export default App;
