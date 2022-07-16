import "./App.css";
import Header from "../src/components/Header";
import Section1 from "./components/Main/Section1";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Section1 />
      </main>
    </div>
  );
}

export default App;
