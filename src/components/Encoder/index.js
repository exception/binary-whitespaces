import React, { useState } from 'react';
import { whiteSpaces } from '../../util/whiteSpaces';

function Encoder() {
    const [encoded, setEncoded] = useState('');

    function handleEncode(event) {
        const value = event.target.value;
        let binary = toBinary(value);
        binary = binary.replace(/0/g, whiteSpaces[0]).replace(/1/g, whiteSpaces[1]);

        setEncoded(binary);
    }

    function toBinary(input) {
        return Array
            .from(input)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin)
            .join('');
    }

    return (
        <div className='tile'>
            <div className='tile is-parent is-vertical'>
                <article className='tile is-child notification is-info'>
                    <p className='title'>Encode...</p>
                    <p className='subtitle'>Enter any sequence and we will weird it out for you!</p>
                    <input className='input' type='text' placeholder='Enter raw sequence...' onChange={handleEncode} />
                    {encoded && <>
                        <span><strong>Output</strong>: <code>-{encoded}-</code></span>
                    </>}
                </article>
            </div>
        </div>
    )
}

export default Encoder;