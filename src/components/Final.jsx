// Final.js

import React from 'react';
import TeamLogo from './TeamLogo';
import './Scoreboard.css';

const Final = ({ data, onHomeLogoClick, onAwayLogoClick }) => {
    const {
        home,
        home_logo,
        home_record,
        home_score,
        away,
        away_logo,
        away_score,
        away_record,
        home_pts_leader,
        home_ast_leader,
        home_reb_leader,
        away_pts_leader,
        away_ast_leader,
        away_reb_leader,
        headline,
        time
    } = data;

    return (
        <div className="final-game">
            <div className="team">
                <div style={{ cursor: 'pointer' }} onClick={() => onAwayLogoClick(data)}>
                    <TeamLogo src={away_logo} alt={away} />
                </div>
                <div className="info">
                    <h2>{away}</h2>
                    <p>{away_record}</p>
                </div>
                <div className="score">{away_score}</div>
            </div>
            <div className="versus">{time}</div>
            <div className="team">
                <div style={{ cursor: 'pointer' }} onClick={() => onHomeLogoClick(data)}>
                    <TeamLogo src={home_logo} alt={home} />
                </div>
                <div className="info">
                    <h2>{home}</h2>
                    <p>{home_record}</p>
                </div>
                <div className="score">{home_score}</div>
            </div>
            <div className="stats">
                {headline ? (
                  <p>{headline}</p>
                ) : (
                  <div className="stats-min">
                    {home_score > away_score ? (
                      <>
                        <p>{home_pts_leader}</p>
                        <p>{home_reb_leader}</p>
                        <p>{home_ast_leader}</p>
                      </>
                    ) : (
                      <>
                        <p>{away_pts_leader}</p>
                        <p>{away_reb_leader}</p>
                        <p>{away_ast_leader}</p>
                      </>
                    )}
                  </div>
                )}
            </div>
        </div>
    );
};

export default Final;
