import { Button, InputField, Link } from 'components';
import { FC } from 'react';
import { SITE_NAME, URLS } from 'utils/misc';

const Register: FC = ({}) => {
	return (
		<section className="bg-gradient-primary px-8 py-8 min-h-main-content">
			<form className="min-h-main-content max-w-md mx-auto flex flex-col gap-6 justify-center items-center">
				<h1 className="text-white text-4xl font-bold">Create {SITE_NAME} Account</h1>
				<InputField name="email" labelText="Email" fluid />
				<InputField name="username" labelText="Username" fluid />
				<InputField name="password" labelText="Password" fluid type="password" />
				<Button className="w-full">Create Account</Button>
				<Link className="w-full" href={URLS.LOGIN}>
					<Button className="w-full">Already have an account</Button>
				</Link>
			</form>
		</section>
	);
};

export default Register;
