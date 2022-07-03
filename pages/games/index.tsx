import { gamesService } from '../../api';
import { Game } from '../../models/game';
import AddGameForm from './_AddGameForm';
import GamesList from './_GamesList';

export const getServerSideProps = async () => {
    const res = await gamesService.getGames();

    return {
        props: {
            games: res,
        },
    };
};

const GamesPage = ({ games }: GamesPageProps) => {
    return (
        <>
            <GamesList games={games} />
            <AddGameForm />
        </>
    );
};

type GamesPageProps = {
    games: Game[];
};

export default GamesPage;
