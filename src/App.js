import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const saveToLocalStorage = () => {
    localStorage.setItem("saved", JSON.stringify(text))
    setText(localStorage.getItem('saved'));
    
    
  };
  const clear = () => {
    localStorage.clear();
  };

  // const getItem = (e) => {
  //   localStorage.getItem('saved')
  //   setText(e.target.value)
  // }
 

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Notes..."
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={saveToLocalStorage}
        >
          Save
        </button>
        <button className="button is-large" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
