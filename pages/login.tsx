import { Button, InputField, Link } from 'components';
import { FC } from 'react';
import { SITE_NAME, URLS } from 'utils/misc';

const Login: FC = ({}) => {
	return (
		<section className="bg-gradient-primary px-8 py-8 min-h-main-content">
			<form className="min-h-main-content max-w-md mx-auto flex flex-col gap-6 justify-center items-center">
				<h1 className="text-white text-4xl font-bold">Enter {SITE_NAME}</h1>
				<InputField name="email" labelText="Email" fluid />
				<InputField name="password" labelText="Password" fluid type="password" />
				<Button className="w-full">Log in</Button>
				<Link className="w-full" href={URLS.REGISTER}>
					<Button className="w-full">Create account</Button>
				</Link>
			</form>
		</section>
	);
};

export default Login;
