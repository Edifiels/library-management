import React from 'react';

function BookForm({ book, setBook, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="book-form">
      <input
        type="text"
        placeholder="Название"
        value={book.title}
        onChange={(e) => setBook({...book, title: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Автор"
        value={book.author}
        onChange={(e) => setBook({...book, author: e.target.value})}
        required
      />
      <input
        type="number"
        placeholder="Год издания"
        value={book.year}
        onChange={(e) => setBook({...book, year: e.target.value})}
        required
      />
      <select
        value={book.genre}
        onChange={(e) => setBook({...book, genre: e.target.value})}
        required
      >
        <option value="">Выберите жанр</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Детектив">Детектив</option>
        <option value="Роман">Роман</option>
        <option value="Научная литература">Научная литература</option>
      </select>
      <select
        value={book.status}
        onChange={(e) => setBook({...book, status: e.target.value})}
      >
        <option value="unread">Не прочитано</option>
        <option value="read">Прочитано</option>
      </select>
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default BookForm;
