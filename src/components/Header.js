import React from 'react';
import Stats from './Stats';
import Stopwatch from "./Stopwatch";
import PropTypes from 'prop-types';

//destructuring assignment of props. {} - is an object
const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players}/>
            <h1>{ title }</h1>
            <Stopwatch />
        </header>
    );
}
//validating props
Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
}
Header.defaultProps = {
    title: 'Scoreboard'
}
export default Header;
