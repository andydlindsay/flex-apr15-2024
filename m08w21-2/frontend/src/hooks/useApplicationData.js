import {useEffect, useState} from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then((response) => {
        setBooks(response.data);
      });
  }, []);

  return {
    books
  };
};

export default useApplicationData;
