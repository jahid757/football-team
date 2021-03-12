import React, { useEffect, useState } from 'react';
import LeagueBadge from '../LeagueBadge/LeagueBadge';
import './Leagues.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Leagues = ({league}) => {
    const {strLeague,idLeague,strSport} = league;
    const [leagueDetail,setLeagueDetail] = useState([])
    const history = useHistory()
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagueDetail(data.leagues))
    },[idLeague]);

    const handelDetailLeague = () => {
        const url = `league/${idLeague}`;
        history.push(url)
    }

    return (
        <div className="col-md-4 col-sm-6 mb-3 h-100 text-center text-white">
            <div className="p-3 single-league">
                <LeagueBadge badge={leagueDetail}></LeagueBadge>
                <h5>{strLeague}</h5>
                <p>Sports type: {strSport}</p>
                <button className="btn btn-success" onClick={handelDetailLeague}>Read More  <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Leagues;