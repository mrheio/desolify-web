import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormData } from '../../api/authService';
import {
    Container,
    Form,
    Loading,
    StyledButton,
    StyledInput,
    Title,
} from '../../components';
import { NotAuthGuard } from '../../routing';
import { AppDispatch, login, resetAuthStatuses, RootState } from '../../state';
import { emailRule, requiredRule } from '../../utils/validation';

const Login = () => {
    const {
        loading: { login: loginLoading },
        error: { login: loginError },
    } = useSelector((state: RootState) => state.auth);
    const dispatch: AppDispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: { email: '', password: '' } });

    const submitForm = (data: LoginFormData) => {
        dispatch(login(data));
    };

    useEffect(() => {
        return () => {
            dispatch(resetAuthStatuses());
        };
    }, [dispatch]);

    return (
        <NotAuthGuard>
            <Loading condition={loginLoading} screen>
                <Container className='p-2 h-screen flex flex-col gap-6 justify-center'>
                    <Title
                        className='font-bold text-center'
                        size='xxl'
                        text='Log in to Desolify'
                    />
                    <Form
                        className='form-flow'
                        onSubmit={handleSubmit(submitForm)}
                        error={loginError}
                    >
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                ...requiredRule,
                                ...emailRule,
                            }}
                            render={({ field }) => (
                                <StyledInput
                                    label='Email'
                                    error={errors.email?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name='password'
                            control={control}
                            rules={{
                                ...requiredRule,
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
                            Log In
                        </StyledButton>
                    </Form>
                </Container>
            </Loading>
        </NotAuthGuard>
    );
};

export default Login;
