import './App.css';

import BookList from './components/BookList';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {books} = useApplicationData();

  return (
    <div className="App">
      <h2>Does this work?????</h2>
      <BookList books={books} />
    </div>
  );
};

export default App;
