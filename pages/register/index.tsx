import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterFormData } from '../../api/authService';
import {
    Container,
    Form,
    Loading,
    StyledButton,
    StyledInput,
    Title,
} from '../../components';
import { NotAuthGuard } from '../../routing';
import {
    AppDispatch,
    register,
    resetRegisterStatus,
    RootState,
} from '../../state';
import {
    emailRule,
    passwordRule,
    requiredRule,
    usernameRule,
} from '../../utils/validation';

const Register = () => {
    const {
        loading: { register: registerLoading },
        error: { register: registerError },
    } = useSelector((state: RootState) => state.auth);
    const dispatch: AppDispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: { email: '', username: '', password: '' },
    });

    const submitForm = (data: RegisterFormData) => {
        dispatch(register(data));
    };

    useEffect(() => {
        return () => {
            dispatch(resetRegisterStatus());
        };
    }, [dispatch]);

    return (
        <NotAuthGuard>
            <Loading condition={registerLoading} screen>
                <Container className='p-2 h-screen flex flex-col gap-6 justify-center'>
                    <Title
                        className='font-bold text-center'
                        size='xxl'
                        text='Register to Desolify'
                    />
                    <Form
                        className='form-flow'
                        onSubmit={handleSubmit(submitForm)}
                        error={registerError}
                    >
                        <Controller
                            name='email'
                            control={control}
                            rules={{ ...requiredRule, ...emailRule }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Email'
                                    error={errors.email?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name='username'
                            control={control}
                            rules={{ ...requiredRule, ...usernameRule }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Username'
                                    error={errors.username?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name='password'
                            control={control}
                            rules={{
                                ...requiredRule,
                                ...passwordRule,
                            }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Password'
                                    error={errors.password?.message}
                                    type='password'
                                    {...field}
                                />
                            )}
                        />
                        <StyledButton fluid type='submit'>
                            Register
                        </StyledButton>
                    </Form>
                </Container>
            </Loading>
        </NotAuthGuard>
    );
};

export default Register;
