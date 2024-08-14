import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

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
