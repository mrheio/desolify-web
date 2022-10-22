import { useState } from 'react';

type useOverlayToggleType = (initialState?: boolean) => [boolean, () => void];

const useOverlayToggle: useOverlayToggleType = (initialState = false) => {
	const [isOverlayOpen, setIsOverlayOpen] = useState(initialState);

	const toggleOverlay = () => {
		setIsOverlayOpen((prev) => !prev);
	};

	return [isOverlayOpen, toggleOverlay];
};

export default useOverlayToggle;
