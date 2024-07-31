import './App.css';
import React from 'react';

const App = () => {
  const attributes = {
    id: 'main-content',
    alt: 'this is alt text',
    href: 'www.example.com',
    className: 'btn btn-primary'
  };

  const child = React.createElement('p', attributes, 'content for the paragraph');
  // const div = React.createElement('div', null, child); // <div>hello world</div>
  // return div;

  const name = 'alice';

  // EJS <%= name %>
  // template literals `${name}`

  const returningString = () => {
    return 'hello world';
  };

  return (
    <div>
      <p id="whatever">You are signed in as: { returningString() }</p>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="App">
//       <h2>Inside the App component</h2>
//     </div>
//   ); 
// };

export default App;

