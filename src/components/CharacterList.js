import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  const routeToCharacters = () => {
    props.history.push('./characters')
  }
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState(CharacterList);

  useEffect(() => {
      axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            const results = response.data.results.filter(character => character.name.toLowerCase().includes(searchName.toLowerCase())
            );
            setChar(response.data.results)
            setSearchResults(results);
          })
          .catch(error => {
            console.log('Data no returned', error);
          });
        }, [searchName]);
      
        const handleChange = event => {
          setSearchName(event.target.value);
        };
            

          
 // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="character-list">
        <div>
            {char.map(character => {
                return <CharacterCard character={character} />;
            })}
        </div>
    )
    </section>
  );
}

