import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import FilterBooks from './FilterBooks';

function BookList() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState({ genre: '', status: '' });

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const clearAllBooks = () => {
    if (window.confirm('Вы уверены, что хотите удалить все книги?')) {
      setBooks([]);
      localStorage.removeItem('books');
    }
  };

  const filteredBooks = books.filter(book => 
    (filter.genre === '' || book.genre === filter.genre) &&
    (filter.status === '' || book.status === filter.status)
  );

  return (
    <div className="book-list">
      <h1>Список книг</h1>
      <FilterBooks filter={filter} setFilter={setFilter} />
      <ul>
        {filteredBooks.map(book => (
          <BookItem key={book.id} book={book} onDelete={deleteBook} />
        ))}
      </ul>
      <p>Количество книг: {filteredBooks.length}</p>
      <button onClick={() => window.location.reload()}>Обновить страницу</button>
      <button onClick={clearAllBooks} className="danger">Удалить все книги</button>
    </div>
  );
}

export default BookList;
