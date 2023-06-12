import React from 'react';

export default function SearchBox({searchChange }) {
    return (
        <div className='pa2'>
            <input className='pa3 b--green bg-lightest-blue' type='serach' placeholder='search robots' onChange={searchChange} />
        </div>
    )
}
