import logo from "./logo.svg";
import "./App.css";
import "./normal.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <h1>Aside</h1>
        <div className="sidemenu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar"></div>
              <div className="message">Hello World</div>
            </div>
          </div>
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt"></div>
              <div className="message">I am an AI</div>
            </div>
          </div>
        </div>
        <div className="chatbox-input-holder">
          <textarea
            className="chat-input"
            placeholder="Pleas type here"
            rows="1"
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
