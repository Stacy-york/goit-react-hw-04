import { useState } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    onSearch(trimmedQuery);
    setQuery('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}