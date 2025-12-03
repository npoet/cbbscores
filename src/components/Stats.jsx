// Stats.js

import React from 'react';
import './Scoreboard.css';

const Stats = ({ data, isLive, isFinal }) => {
    const {
        home,
        home_record,
        home_conf,
        home_pts_leader,
        home_ast_leader,
        home_reb_leader,
        away,
        away_record,
        away_conf,
        away_pts_leader,
        away_ast_leader,
        away_reb_leader,
        pass_leader,
        rush_leader,
        rec_leader,
        last_play,
        down_distance,
        win_prob,
        gamecast,
        box_score,
        highlights,
        description
    } = data;
    
    return (
        <div className="stats">
            {isLive ? (
                <div>
                    <div className="stat">
                        <h3><p>{home} Leaders:</p></h3>
                        <p>{home_pts_leader}</p>
                        <p>{home_ast_leader}</p>
                        <p>{home_reb_leader}</p>
                        <h3><p>{away} Leaders:</p></h3>
                        <p>{away_pts_leader}</p>
                        <p>{away_ast_leader}</p>
                        <p>{away_reb_leader}</p>
                    </div>
                    <div className="stat">
                        <h3><p>Last Play:</p></h3>
                        <p>{last_play}</p>
                    </div>
                    {win_prob && (
                      <div className="stat">
                        <h3><p>Win Probability:</p></h3>
                        <p>{win_prob}</p>
                      </div>
                    )}
                </div>
            ) : isFinal ? (
                <div>
                    <div className="stat">
                        <h3><p>{home} Leaders:</p></h3>
                        <p>{home_pts_leader}</p>
                        <p>{home_ast_leader}</p>
                        <p>{home_reb_leader}</p>
                        <h3><p>{away} Leaders:</p></h3>
                        <p>{away_pts_leader}</p>
                        <p>{away_ast_leader}</p>
                        <p>{away_reb_leader}</p>
                    </div>
                    <div className="stat">
                        <h3><a href={box_score} target="_blank" rel="noopener noreferrer">Box Score</a></h3>
                    </div>
                    <div className="stat">
                        <p>{description}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="stat">
                        <h3><p>{home} Leaders:</p></h3>
                        <p>{home_pts_leader}</p>
                        <p>{home_ast_leader}</p>
                        <p>{home_reb_leader}</p>
                    </div>
                    <div className="stat">
                        <h3><p>{away} Leaders:</p></h3>
                        <p>{away_pts_leader}</p>
                        <p>{away_ast_leader}</p>
                        <p>{away_reb_leader}</p>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Stats;
