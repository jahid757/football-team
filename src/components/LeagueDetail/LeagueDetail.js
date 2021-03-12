import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import banner from'../../banner.jpg';
import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMarsStroke} from '@fortawesome/free-solid-svg-icons';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png';

import { Link } from 'react-router-dom';

const LeagueDetail = () => {
    const {id} = useParams();
    const [leagueInfo,setLeagueInfo] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagueInfo(data.leagues[0]))
    },[id]);

    const {strLeague,strBadge,dateFirstEvent,strCountry,strSport,strGender,strDescriptionEN} = leagueInfo;


    const playerGender = strGender
    let playerImg;
    if(playerGender === 'Male'){
        playerImg = maleImg;
    }else{
        playerImg = femaleImg;
    }

    return (
        <div>
            <div style={{backgroundImage: `linear-gradient(rgb(56 55 55 / 85%),rgb(56 55 55 / 85%)) , url(${(leagueInfo.strBanner) || banner})`}} className="leagueDetailBanner">

                <div className="league-header">
                    <img src={strBadge} alt=""/>
                    <h2>{strLeague}</h2>
                </div>
            </div>
            <div className="league-detail-container">
                <div className="container">
                    <div className="justify-content-md-between d-md-flex align-items-md-center p-4 league-info mb-4">
                        <div>
                            <h2>{strLeague}</h2>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {dateFirstEvent}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</p>
                        </div>
                        <div className="player-image">
                            <img src={playerImg} alt=""/>
                        </div>
                    </div>
                    <div className="description">
                        <p>{strDescriptionEN}</p>
                        <p>{strDescriptionEN}</p>
                    </div>

                    <div className="icon">
                        <Link to='' >
                            <img src={twitter} alt=""/>
                        </Link>
                        <Link to='' >
                            <img src={facebook} alt=""/>
                        </Link>
                        <Link to='' >
                            <img src={youtube} alt=""/>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LeagueDetail;