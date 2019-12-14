import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList';
import axios from 'axios';

export default function SearchForm(props) {

  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState(CharacterList);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const results = response.data.results.filter(character => character.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setSearchResults(results);
    })
    .catch(error => {
      console.log('Data no returned', error);
    });
  }, [searchName]);

  const handleChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <section className="search-form">
     // Add a search form here
     <form>
       <label htmlFor='name'>Search:</label>
       <input 
        id='name'
        type='text'
        name='textfield'
        placeholder='Search'
        onChange={handleChange}
        value={searchName}
       />
     </form>
     <div>
       <ul>
         {searchResults.map(character => {
           return <li key={character}>{character}</li>;
         })}
       </ul>
     </div>
    </section>
  );
}
