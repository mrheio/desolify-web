import { faFaceFrown, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Loading, Title } from '../../components';
import GameItem from '../../components/GameItem';
import { Game } from '../../models/game';
import {
    AppDispatch,
    resetGamesStatuses,
    RootState,
    setGames,
} from '../../state';

const GamesList = ({ games }: GamesListProps) => {
    const {
        games: supportedGames,
        loading: { delete: deleteGameLoading },
    } = useSelector((state: RootState) => state.games);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(setGames(games));

        return () => {
            dispatch(resetGamesStatuses());
        };
    }, []);

    return (
        <Container className='p-2 pt-8'>
            <div className='text-center'>
                <FontAwesomeIcon
                    icon={faGamepad}
                    className='text-3xl text-primary-500 mr-4'
                />
                <Title
                    className='font-bold inline-block'
                    size='xxl'
                    text='Supported games'
                />
            </div>
            <Loading condition={deleteGameLoading}>
                <Container className='flex flex-col gap-4'>
                    {supportedGames.length ? (
                        supportedGames.map((game) => (
                            <GameItem key={game.id} game={game} />
                        ))
                    ) : (
                        <div className='text-center'>
                            <FontAwesomeIcon
                                icon={faFaceFrown}
                                className='text-3xl'
                            />
                            <Title
                                className='pt-6'
                                size='l'
                                text='No games supported'
                            />
                        </div>
                    )}
                </Container>
            </Loading>
        </Container>
    );
};

type GamesListProps = {
    games: Game[];
};

export default GamesList;
