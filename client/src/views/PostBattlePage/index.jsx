import React, {useState, useEffect} from 'react';
import API, {API_URLS} from './../../api/config';
import Team from './components/Team';
import styles from './PostBattlePage.module.scss';

const PostBattlePage = () => {
    const [teams, setTeams] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await API.get(API_URLS.players);
            setTeams(response.data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.postBattlePage}>
            {/*<div className={styles.background}/>*/}
            <div className={styles.postBattleStatistics}>
                {isLoading
                    ? <div className={styles.loader}>Loading...</div>
                    : teams.winning_team && <>
                    <Team players={teams.winning_team} isWinner={true}/>
                    <Team players={teams.loser_team}/>
                </>
                }
            </div>
        </div>
    );
};

export default PostBattlePage;