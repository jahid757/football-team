import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const style ={
    background:'#0E0A2A',
    paddingTop:'30px'
}

const Home = () => {

    const [leagues,setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagues(data.leagues))
    },[])

    const league = leagues.slice(0,12);

    return (
        <div>
            <div className="banner">
                <h2>Football Sports Leagues</h2>
            </div>
            <div  style={style} >
                 <div className="container">
                    <div className="row">
                        {
                        league.map(league => <Leagues league={league} key={league.idLeague}></Leagues>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;