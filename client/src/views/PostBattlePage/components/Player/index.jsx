import React, {useState} from 'react';
import {GiDeathSkull, GiPistolGun, GiSkullCrossedBones, GiCheckMark} from 'react-icons/gi';
import styles from './Player.module.scss';

const Player = ({name, scores, kills, deaths, isFriend, isAlive}) => {
    const [friend, setFriend] = useState(isFriend);

    return (
        <div className={styles.tooltipWrapper}>
            <div className={styles.player}>
                <div className={styles.content}>
                    <div className={styles.playerMainInfo}>
                        <span className={styles.playerStatus}>{!isAlive && <GiDeathSkull />}</span>
                        <span className={styles.playerName}>{name}</span>
                    </div>
                    <div className={styles.playerScores}>{scores}</div>
                </div>
            </div>
            <div className={styles.tooltip}>
                <div className={styles.content}>
                    <div className={styles.total}>
                        <div><GiPistolGun/> {kills}</div>
                        <div><GiSkullCrossedBones/> {deaths}</div>
                    </div>
                    <div className={styles.friend}>
                        {!friend
                            ? <div className={styles.addFriendButton} onClick={() => setFriend(true)}>
                                add to friends
                            </div>
                            : <GiCheckMark/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;