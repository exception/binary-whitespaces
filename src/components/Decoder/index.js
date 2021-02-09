import React, { useState } from 'react';
import { whiteSpaces } from '../../util/whiteSpaces';

const matcher = /([10]{8}|\s+)/g;

function Decoder() {
    const [decoded, setDecoded] = useState('');

    function handleDecode(event) {
        const value = event.target.value;
        let binary = value.replace(/-/g, '').replace(new RegExp(whiteSpaces[0], 'g'), '0').replace(new RegExp(whiteSpaces[1], 'g'), '1');
        setDecoded(fromBinary(binary));
    }

    function fromBinary(input) {
        if (!input || input.length === 0) return;
        if (!input.match(matcher)) return;

        return input.match(matcher).map(function (fromBinary) {
            return String.fromCharCode(parseInt(fromBinary, 2));
        }).join('');
    }

    return (
        <div className='tile'>
            <div className='tile is-parent is-vertical'>
                <article className='tile is-child notification is-warning'>
                    <p className='title'>Decode...</p>
                    <p className='subtitle'>Enter an encoded string (with the hyphens) and we'll show you the output!</p>
                    <input className='input' type='text' placeholder='Enter encoded output...' onChange={handleDecode} />
                    {decoded && <>
                        <span><strong>Output</strong>: <code>{decoded}</code></span>
                    </>}
                </article>
            </div>
        </div>
    )
}

export default Decoder;