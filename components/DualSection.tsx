import { Container } from '@components';
import { ReactNode } from 'react';

type DualSectionProps = {
	leftElement: ReactNode;
	rightElement: ReactNode;
};

const DualSection = ({ leftElement, rightElement }: DualSectionProps) => {
	return (
		<Container className="py-20 flex gap-4">
			{leftElement}
			{rightElement}
		</Container>
	);
};

export default DualSection;
