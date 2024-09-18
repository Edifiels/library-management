import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from './BookForm';

function EditBook() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const foundBook = storedBooks.find(b => b.id === parseInt(id));
    if (foundBook) {
      setBook(foundBook);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = storedBooks.map(b => b.id === book.id ? book : b);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/');
  };

  if (!book) return <div>Загрузка...</div>;

  return (
    <div className="edit-book">
      <h2>Редактировать книгу</h2>
      <BookForm book={book} setBook={setBook} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditBook;
