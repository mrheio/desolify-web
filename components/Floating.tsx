import { FC, ReactNode } from 'react';

type FloatingType = {
	children: ReactNode;
};

const Floating: FC<FloatingType> = ({ children }) => {
	return <div className="fixed bottom-4 right-4">{children}</div>;
};

export default Floating;
