import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm';

function AddBook() {
  const [book, setBook] = useState({ 
    title: '', 
    author: '', 
    year: '', 
    genre: '', 
    status: 'unread' 
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const newBook = { ...book, id: Date.now() };
    const updatedBooks = [...storedBooks, newBook];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/');
  };

  return (
    <div className="add-book">
      <h2>Добавить новую книгу</h2>
      <BookForm book={book} setBook={setBook} onSubmit={handleSubmit} />
    </div>
  );
}

export default AddBook;
