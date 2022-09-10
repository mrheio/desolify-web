import { Button, Container, GoogleButton, InputField, Link } from '@components';

const Login = () => {
	return (
		<section className="bg-gradient-primary">
			<Container className="min-h-main-content flex flex-col gap-4 h-full justify-center form-flow py-8">
				<h1 className="text-center fs-primary-heading fw-bold text-white mb-4">Enter your account</h1>
				<InputField label="Email" onDark />
				<InputField label="Password" onDark />
				<Button style="secondary">Log in</Button>
				<GoogleButton onClick={() => {}} />
				<Link href="/register">
					<Button className="w-full">Create account</Button>
				</Link>
			</Container>
		</section>
	);
};

export default Login;
