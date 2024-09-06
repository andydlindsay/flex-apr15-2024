import useApplicationData from '../hooks/useApplicationData';
import './BookListItem.scss';

const BookListItem = (props) => {
  // console.log(props);

  return (
    <div className="BookListItem">
      <h2>Title: {props.title} (id: {props.id})</h2>
      <h3>Author: {props.author}</h3>
      <h3>Publication Year: {props.publicationYear}</h3>
      <h3>Genre: {props.genre}</h3>
    </div>
  );
};

export default BookListItem;
