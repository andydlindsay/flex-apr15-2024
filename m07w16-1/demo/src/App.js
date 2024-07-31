// import Header from './components/Header';

const App = (props) => {
  console.log('props', props);

  // props.myNamedFunc();
  
  return (
    <div>
      <h2>My App</h2>
      { props.children }
    </div>
  );
};

export default App;
