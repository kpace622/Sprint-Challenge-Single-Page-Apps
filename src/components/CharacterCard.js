import React from "react";


export default function CharacterCard({ character }) {
    return (
        <div>
            <h2>{character.name}</h2>
            <h2>{character.species}</h2>
            <img src={character.image} />
        </div>
    );
};
