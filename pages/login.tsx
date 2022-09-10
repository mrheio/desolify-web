import { Button, Container, InputField } from '@components';

const Login = () => {
	return (
		<section className="bg-gradient-primary">
			<Container className="min-h-main-content flex flex-col gap-4 h-full justify-center form-flow">
				<h1 className="text-center fs-primary-heading fw-bold text-white mb-4">Enter your account</h1>
				<InputField label="Email" onDark />
				<InputField label="Password" onDark />
				<Button style="secondary">Enter account</Button>
			</Container>
		</section>
	);
};

export default Login;
