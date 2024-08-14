import React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div>
      <Header />
      <main>
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
