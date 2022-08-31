import { ReactNode } from 'react';

type CardProps = {
	title?: ReactNode;
	content?: ReactNode;
	children?: ReactNode;
};

const Card = ({ title, content, children }: CardProps) => {
	return (
		<div className="bg-secondary-300/[.16] rounded-xl px-8 py-6 w-full hover:scale-105">
			{title && content ? (
				<>
					<h1 className="fs-primary-heading fw-semi-bold mb-4 ">{title}</h1>
					<p className="text-black">{content}</p>
				</>
			) : (
				children
			)}
		</div>
	);
};

export default Card;
