import { useState } from "react";
import { bookList } from "../../data";
import BoardHeader from "./BoardHeader";
import BooksList from "./BooksList";

function BooksBoard() {
  const [allBooks, setAllBooks] = useState(bookList);

  const handelFilter = (type) => {
    // console.log(type);
    if (type === "name_asc") {
      const ascendingBooks = allBooks
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      setAllBooks(ascendingBooks);
    } else if (type === "name_desc") {
      const descendingBooks = allBooks
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
      setAllBooks(descendingBooks);
    } else if (type === "year_asc") {
      const ascendingBooksByYear = allBooks
        .slice()
        .sort((a, b) => a.year - b.year);
      setAllBooks(ascendingBooksByYear);
    } else if (type === "year_desc") {
      const descendingBooksByYear = allBooks
        .slice()
        .sort((a, b) => b.year - a.year);
      setAllBooks(descendingBooksByYear);
    }
  };
  const handelSearch = (text) => {
    // if no search text then show all books 
    if (text==='') {
     return setAllBooks(bookList);   
    }
    // filtered by search text 
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setAllBooks(filteredBooks);
  };
  const handelFeb = (id) => {
    const newList = allBooks.map(b=>{
      if (id===b.id) {
        b.isFavourite = !b.isFavourite;
        return b;
      }else{
        return b;
      }
    })
    setAllBooks(newList)
  };
  
  return (
    <>
      <BoardHeader handelFilter={handelFilter} handelSearch={handelSearch} />
      <BooksList allBooks={allBooks} handelFeb={handelFeb} />
    </>
  );
}

export default BooksBoard;
