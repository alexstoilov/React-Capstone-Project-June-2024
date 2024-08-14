import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-header">
        <section className="hero">
          <h1>Welcome to Passion Connect</h1>
          <p>Your platform to connect with writers and share your passion.</p>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
