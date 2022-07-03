import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Game } from '../models/game';
import { AppDispatch, deleteGame } from '../state';
import IconButton from './IconButton';
import Title from './Title';

const GameItem = ({ game }: GameItemProps) => {
    const dispatch: AppDispatch = useDispatch();

    const handleDeleteGame = () => {
        dispatch(deleteGame(game));
    };

    return (
        <div className='shadow-md px-6 py-2 rounded-2xl bg-white flex justify-between'>
            <div>
                <Title className='font-semibold' size='m' text={game.name} />
                <p className='text-lg'>
                    Max team size: <b>{game.teamSize}</b>
                </p>
            </div>
            <div className='grid place-items-center'>
                <IconButton
                    title='delete game'
                    onClick={handleDeleteGame}
                    style='error'
                >
                    <FontAwesomeIcon icon={faTrash} />
                </IconButton>
            </div>
        </div>
    );
};

type GameItemProps = {
    game: Game;
};

export default GameItem;
