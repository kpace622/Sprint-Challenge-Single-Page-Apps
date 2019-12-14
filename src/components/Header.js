import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <div>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <Links>
        <div>
          <Link className='link' to='/'>Home</Link>
        </div>
        <div>
          <Link className='link' to='/characters'>Characters</Link>
        </div>
      </Links>
    </div>
  );
}
