import React from 'react';

function FilterBooks({ filter, setFilter }) {
  return (
    <div className="filter-books">
      <select 
        value={filter.genre} 
        onChange={(e) => setFilter({...filter, genre: e.target.value})}
      >
        <option value="">Все жанры</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Детектив">Детектив</option>
        <option value="Роман">Роман</option>
        <option value="Научная литература">Научная литература</option>
      </select>
      <select 
        value={filter.status} 
        onChange={(e) => setFilter({...filter, status: e.target.value})}
      >
        <option value="">Все статусы</option>
        <option value="read">Прочитано</option>
        <option value="unread">Не прочитано</option>
      </select>
    </div>
  );
}

export default FilterBooks;
