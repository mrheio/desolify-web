import { yupResolver } from '@hookform/resolvers/yup';
import { authService, RegisterProps } from 'auth/AuthService';
import { Button, InputField, Link, Loading } from 'components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CustomError } from 'utils/errors';
import { ERROR_EMAIL, ERROR_REQUIRED_FIELD } from 'utils/errors/messages';
import { SITE_NAME, URLS } from 'utils/misc';
import * as yup from 'yup';

const registerFormSchema = yup
	.object({
		email: yup.string().email(ERROR_EMAIL).required(ERROR_REQUIRED_FIELD),
		username: yup.string().required(ERROR_REQUIRED_FIELD),
		password: yup.string().required(ERROR_REQUIRED_FIELD),
	})
	.required();

const Register: FC = ({}) => {
	const { error, isLoading, mutate } = useMutation<void, CustomError, RegisterProps, () => void>({
		mutationFn: authService.register,
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterProps>({ resolver: yupResolver(registerFormSchema) });

	const onSubmit = handleSubmit((data) => {
		mutate(data);
	});

	return (
		<section className="py-8">
			<Loading fullScreen isLoading={isLoading}>
				<form
					className="min-h-main-content max-w-md mx-auto flex flex-col gap-6 justify-center items-center"
					onSubmit={onSubmit}
				>
					<h1 className="text-white text-4xl font-bold">Create {SITE_NAME} Account</h1>
					<InputField labelText="Email" fluid {...register('email')} error={errors.email?.message} />
					<InputField labelText="Username" fluid {...register('username')} error={errors.username?.message} />
					<InputField
						labelText="Password"
						fluid
						type="password"
						{...register('password')}
						error={errors.password?.message}
					/>
					{error && <span className="font-semibold text-rose-600">{error.message}</span>}
					<Button className="w-full" type="submit">
						Create Account
					</Button>
					<Link className="w-full" href={URLS.LOGIN}>
						<Button className="w-full">Already have an account</Button>
					</Link>
				</form>
			</Loading>
		</section>
	);
};

Register.unprotected = true;

export default Register;
