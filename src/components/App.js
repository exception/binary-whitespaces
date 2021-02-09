import React from 'react';
import Decoder from './Decoder';
import Encoder from './Encoder';

export default function App() {
  return (
    <>
      <div className='container'>
        <div className='tile is-ancestor'>
          <div className='tile is-vertical is-12'>
            <Encoder />
            <Decoder />
          </div>
        </div>
      </div>
      <div className='ourFooter'>
        <h1>Made with <span style={{ color: '#e74c3c' }}>&#9829;</span> by <a href='http://twitter.com/erosemberg_'>Erik</a></h1>
      </div>
    </>
  )
}