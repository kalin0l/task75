import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const saveToLocalStorage = (e) => {
    setText(e.target.value);
    localStorage.setItem("saved", text)
    
    
  };
  const clear = () => {
    localStorage.clear();
  };

  // const getItem = (e) => {
  //   const theT = localStorage.getItem('saved')
  //   if(theT){
  //     return theT;
  //   }
  // }
  useEffect(() => {
    setText(localStorage.getItem('saved'))
  },[])
 

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              value={text}
              onChange={(e) => saveToLocalStorage(e)}
              placeholder="Notes..."
            >{localStorage.getItem('saved')}</textarea>
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
