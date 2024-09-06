import BookListItem from "./BookListItem";

const BookList = (props) => {
  const mappedBooks = props.books.map((book) => {
    // return <BookListItem key={book.id} book={book} />;
    return <BookListItem key={book.id} {...book} />;
  });

  return (
    <div>
      <h2>Book List</h2>
      { mappedBooks }
    </div>
  );
};

export default BookList;
