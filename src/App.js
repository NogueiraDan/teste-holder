import "./App.css";
import Header from "../src/components/Header";
import Section1 from "./components/Main/Section1";
import Section2 from "./components/Main/Section2";
import Section3 from "./components/Main/Section3";
import Section4 from "./components/Main/Section4";
import Section5 from "./components/Section5";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
    </div>
  );
}

export default App;
