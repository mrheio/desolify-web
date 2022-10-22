import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputField } from 'components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type AddGameFormData = {
	gameName: string;
	maxPlayersInTeam: string;
};

const addGameFormSchema = yup
	.object({
		gameName: yup.string().required(),
		maxPlayersInTeam: yup.number().required(),
	})
	.required();

const _AddGame: FC = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddGameFormData>({ resolver: yupResolver(addGameFormSchema) });

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<form className="relative z-20 flex flex-col gap-4 w-full max-w-sm mx-auto" onSubmit={onSubmit}>
			<h1 className="text-white text-5xl font-bold mb-4 text-center">Add game</h1>
			<InputField labelText="Game name" fluid {...register('gameName')} error={errors.gameName?.message} />
			<InputField
				labelText="Max players in team (number)"
				fluid
				{...register('maxPlayersInTeam')}
				error={errors.maxPlayersInTeam?.message}
			/>
			<Button type="submit">Add game</Button>
		</form>
	);
};

export default _AddGame;
