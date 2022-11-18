import { Loading } from 'components';
import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect } from 'react';
import { useUser } from 'utils/hooks';
import { URLS } from 'utils/misc';

type AuthGuardProps = {
	children: ReactElement;
};

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
	const router = useRouter();
	const { user, isLoading, isSuccess, isFetched, isFetching } = useUser();

	useEffect(() => {
		console.log(
			`USER: ${user} | LOADING: ${isLoading} | SUCCESS: ${isSuccess} | FETCHING: ${isFetching} | FETCHED: ${isFetched}`,
		);

		if (isSuccess && !isLoading) {
			console.log('here');

			if (!user) {
				router.push(URLS.LOGIN);
			}
		}
	}, [user]);

	return (
		<Loading fullScreen isLoading={isLoading}>
			{children}
		</Loading>
	);
};

export default AuthGuard;
