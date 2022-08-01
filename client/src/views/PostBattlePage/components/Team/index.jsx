import React from 'react';
import Player from '../Player';
import cupImage from '../../../../assets/images/cup.png';
import styles from './Team.module.scss';

const Team = ({players, isWinner}) => {
    return (
        <div className={styles.team}>
            <div className={styles.playersList}>
                {players
                    .sort((player1, player2) => player2.scores - player1.scores)
                    .map(player => <Player key={player.id} {...player}/>)}
            </div>
            {isWinner && <div className={styles.winnerTeam}>
                <img src={cupImage}/>
                <span>Winner!</span>
                <img src={cupImage}/>
            </div>}
        </div>
    );
};

export default Team;