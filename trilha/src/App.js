import React, {useState} from "react"
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Pacotes from "./components/Pacotes";



function App() {
  const [numbers, setNumbers] = useState ([])
  return (
    <div className="App">
      <Header />
      <Numbers numbers={numbers} setNumbers={setNumbers}/>
      <Pacotes numbers={numbers}/>
      <Footer />
    </div>
  );
}

export default App;
