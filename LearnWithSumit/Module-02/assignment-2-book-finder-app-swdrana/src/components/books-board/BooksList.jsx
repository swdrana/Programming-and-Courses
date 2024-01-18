/* eslint-disable react/prop-types */
import Book from "./Book";

function BooksList({ allBooks, handelFeb }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allBooks.map((book) => (
        <Book key={book.id} book={book} handelFeb={handelFeb} />
      ))}
    </div>
  );
}

export default BooksList;
