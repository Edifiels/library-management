import React from 'react';
import { Link } from 'react-router-dom';

function BookItem({ book, onDelete }) {
  return (
    <li className="book-item">
      <div>
        <h3>{book.title}</h3>
        <p>Автор: {book.author}</p>
        <p>Год: {book.year}</p>
        <p>Жанр: {book.genre}</p>
        <p>Статус: {book.status === 'read' ? 'Прочитано' : 'Не прочитано'}</p>
      </div>
      <div>
        <Link to={`/edit/${book.id}`} className="edit-button">Редактировать</Link>
        <button onClick={() => onDelete(book.id)} className="delete-button">Удалить</button>
      </div>
    </li>
  );
}

export default BookItem;
