import { yupResolver } from '@hookform/resolvers/yup';
import { authService, LoginProps } from 'auth/AuthService';
import { Button, InputField, Link } from 'components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ERROR_EMAIL, ERROR_REQUIRED_FIELD } from 'utils/errors/messages';
import { SITE_NAME, URLS } from 'utils/misc';
import * as yup from 'yup';

const loginFormSchema = yup
	.object({
		email: yup.string().email(ERROR_EMAIL).required(ERROR_REQUIRED_FIELD),
		password: yup.string().required(ERROR_REQUIRED_FIELD),
	})
	.required();

const Login: FC = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginProps>({ resolver: yupResolver(loginFormSchema) });

	const onSubmit = handleSubmit((data) => {
		authService.logInWithEmailAndPassword(data);
	});

	return (
		<section className="py-8">
			<form
				className="min-h-main-content max-w-md mx-auto flex flex-col gap-6 justify-center items-center"
				onSubmit={onSubmit}
			>
				<h1 className="text-white text-4xl font-bold">Enter {SITE_NAME}</h1>
				<InputField labelText="Email" fluid {...register('email')} error={errors.email?.message} />
				<InputField
					labelText="Password"
					fluid
					type="password"
					{...register('password')}
					error={errors.password?.message}
				/>
				<Button className="w-full" type="submit">
					Log in
				</Button>
				<Link className="w-full" href={URLS.REGISTER}>
					<Button className="w-full">Create account</Button>
				</Link>
			</form>
		</section>
	);
};

export default Login;
