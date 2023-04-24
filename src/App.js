import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm"
import Absolutepositioning from "./components/absolutepositioning";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>J and J Holdings Application</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="py-6">
            <Absolutepositioning/>
            {/*} <ContactForm /> */}
          </div>
        </header>
      </div>
  );
}

export default App;