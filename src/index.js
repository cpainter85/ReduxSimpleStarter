import React from 'react';
import ReactDOM from 'react-dom';


//Create a new compenent.
// This compenent should produce some HTML
const App = () => {
  return <div>Hi!</div>
}

// Take this compenent's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
