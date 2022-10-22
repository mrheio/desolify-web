import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Floating, InputField, Overlay } from 'components';
import games from 'utils/data';
import { useOverlayToggle } from 'utils/hooks';
import _AddGame from './_AddGame';

const Games = () => {
	const [isOverlayOpen, toggleOverlay] = useOverlayToggle();

	return (
		<>
			<section className="bg-gradient-primary p-8 min-h-main-content">
				<h1 className="text-center mb-16 text-5xl text-white font-bold">Available games</h1>

				<div className="mb-8">
					<span className="relative">
						<InputField name="search-game" placeholder="Search game" />
						<button className="bg-white p-2 absolute right-2 top-[50%] -translate-y-1/2 hover:bg-gray-100">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</span>
				</div>

				<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{games.map((game) => (
						<div
							className="bg-primary-600 p-8 rounded-md hover:scale-[102.5%] shadow-lg text-white"
							key={game.id}
						>
							<h2 className="text-2xl mb-2">{game.name}</h2>
							<p className="text-sm">
								Max players in team: <strong>{game.maxPlayersInTeam}</strong>
							</p>
						</div>
					))}
				</div>
			</section>

			<Floating>
				<Button onClick={toggleOverlay}>Add game</Button>
			</Floating>

			<Overlay isOpen={isOverlayOpen} toggleOverlay={toggleOverlay}>
				<_AddGame />
			</Overlay>
		</>
	);
};

export default Games;
