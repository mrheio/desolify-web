import { authService } from 'auth/AuthService';
import { useMutation, useQueryClient } from 'react-query';

const useLogOut = () => {
	const queryClient = useQueryClient();

	const logOutMutation = useMutation({
		mutationFn: authService.logOut,
		onSuccess: () => {
			queryClient.setQueryData('getUser', null);
		},
	});

	return logOutMutation;
};

export default useLogOut;
