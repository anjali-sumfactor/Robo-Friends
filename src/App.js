import React from 'react'
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

export default function App() {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    )
}
