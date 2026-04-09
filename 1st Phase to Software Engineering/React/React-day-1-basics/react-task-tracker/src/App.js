import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header/>

      <Footer year = {new Date().getFullYear()} />

    </div>
  );
}

export default App;
