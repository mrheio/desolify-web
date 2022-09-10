import { Button, Container, InputField, Link } from '@components';

const Register = () => {
	return (
		<section className="bg-gradient-primary">
			<Container className="min-h-main-content flex flex-col gap-4 h-full justify-center form-flow py-8">
				<h1 className="text-center fs-primary-heading fw-bold text-white mb-4">Create your account</h1>
				<InputField label="Email" onDark />
				<InputField label="Username" onDark />
				<InputField label="Password" onDark />
				<Button style="secondary">Register</Button>
				<Link href="/login">
					<Button className="w-full">Enter account</Button>
				</Link>
			</Container>
		</section>
	);
};

export default Register;
