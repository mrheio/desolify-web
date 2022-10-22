import { FC, ReactNode, useEffect } from 'react';
import { joinClasses } from 'utils/basics';

type OverlayProps = {
	isOpen: boolean;
	toggleOverlay: () => void;
	children: ReactNode;
};

const Overlay: FC<OverlayProps> = ({ isOpen, toggleOverlay, children }) => {
	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}, [isOpen]);

	return (
		<div
			className={joinClasses(
				'fixed inset-0 z-10 pt-navbar',
				!isOpen && 'hidden',
				isOpen && 'flex items-center justify-center bg-black/80 overflow-hidden',
			)}
			onClick={toggleOverlay}
		>
			<div className="relative z-20 mx-auto w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Overlay;
