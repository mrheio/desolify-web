import { authService } from 'auth/AuthService';
import { AppUser } from 'models';
import { QueryKey, useQuery } from 'react-query';
import { AuthError } from 'utils/errors';

const useUser = () => {
	const {
		data: user,
		isSuccess,
		isLoading,
		error,
		isError,
		isFetched,
		isFetching,
	} = useQuery<AppUser | null, AuthError, AppUser | null, QueryKey>({
		queryKey: 'getUser',
		queryFn: authService.getUser,
	});

	return { user, isLoading, isSuccess, error, isError, isFetched, isFetching };
};

export default useUser;
